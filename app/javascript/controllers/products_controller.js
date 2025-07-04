import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["list"]

  connect() {
    console.log("Products controller connected")
    this.loadProducts()
  }

  loadProducts() {
    fetch("/api/v1/products")
      .then(response => response.json())
      .then(data => {
        this.listTarget.innerHTML = this.renderProducts(data)
      })
      .catch(error => {
        console.error("Error loading products:", error)
      })
  }

  renderProducts(products) {
    return products.map(product => `
      <div class="border p-4 rounded shadow-md" data-product-id="${product.id}">
        <img src="${product.image}" alt="Product image" class="w-full h-40 object-cover mb-2" />
        <h2 class="text-lg font-semibold">${product.name}</h2>
        <p class="text-gray-600 mb-2">${product.description}</p>
        <div class="flex justify-between items-center">
          <span class="text-blue-600 font-bold">$${product.price}</span>
          <button
            data-action="products#delete"
            data-product-id="${product.id}"
            class="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    `).join('')
  }

  delete(event) {
    const productId = event.currentTarget.dataset.productId
    
    if (confirm("Are you sure you want to delete this product?")) {
      fetch(`/api/v1/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content,
        },
      })
        .then(response => {
          if (response.ok) {
            const productElement = document.querySelector(`[data-product-id="${productId}"]`)
            if (productElement) {
              productElement.remove()
            }
          }
        })
        .catch(error => {
          console.error("Error deleting product:", error)
        })
    }
  }
}
