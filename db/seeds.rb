# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Create sample products
products = [
  {
    name: "Product #1",
    description: "This is a sample of product #1",
    image: "https://picsum.photos/seed/1/300/300",
    price: 10.99
  },
  {
    name: "Product #2",
    description: "This is a sample of product #2",
    image: "https://picsum.photos/seed/2/300/300",
    price: 11.99
  },
  {
    name: "Product #3",
    description: "This is a sample of product #3",
    image: "https://picsum.photos/seed/3/300/300",
    price: 12.99
  },
  {
    name: "Product #4",
    description: "This is a sample of product #4",
    image: "https://picsum.photos/seed/4/300/300",
    price: 13.99
  },
  {
    name: "Product #5",
    description: "This is a sample of product #5",
    image: "https://picsum.photos/seed/5/300/300",
    price: 14.99
  },
  {
    name: "Product #6",
    description: "This is a sample of product #6",
    image: "https://picsum.photos/seed/6/300/300",
    price: 15.99
  }
]

products.each do |product|
  Product.create!(product)
end

puts "Created #{Product.count} products"