class CreateProducts < ActiveRecord::Migration[7.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :image
      t.decimal :price, precision: 8, scale: 2
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :products, :discarded_at
  end
end
