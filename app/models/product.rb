class Product < ApplicationRecord
  include Discard::Model
  
  validates :name, presence: true
  validates :price, presence: true, numericality: { greater_than: 0 }
  validates :description, presence: true
  validates :image, presence: true

  default_scope -> { kept }
end
