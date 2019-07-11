class CreateUserOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :user_orders do |t|
      t.integer :user_id
      t.boolean :typeBuy
      t.integer :orderbook_id
      t.float :price
      t.float :quantity
      t.timestamps
    end
  end
end
