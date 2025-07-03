module Api
  module V1
    class ProductsController < ApplicationController
      skip_before_action :verify_authenticity_token, only: [:destroy]
      
      def index
        @products = Rails.cache.fetch("products", expires_in: 1.hour) do
          Product.all.to_a
        end
        
        render json: @products
      end
      
      def destroy
        @product = Product.find(params[:id])
        @product.discard
        
        # Invalidate cache after product is deleted
        Rails.cache.delete("products")
        
        render json: { message: "Product successfully removed" }, status: :ok
      end
    end
  end
end