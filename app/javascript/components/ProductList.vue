<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 rounded shadow-md"
    >
      <img :src="product.image" alt="Product image" class="w-full h-40 object-cover mb-2" />
      <h2 class="text-lg font-semibold">{{ product.name }}</h2>
      <p class="text-gray-600 mb-2">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-blue-600 font-bold">${{ product.price }}</span>
        <button
          @click="deleteProduct(product.id)"
          class="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch("/api/v1/products")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    deleteProduct(id) {
      if (confirm("Are you sure you want to delete this product?")) {
        fetch(`/api/v1/products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
          },
        })
          .then((response) => {
            if (response.ok) {
              this.products = this.products.filter((product) => product.id !== id);
            }
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      }
    },
  },
};
</script>
