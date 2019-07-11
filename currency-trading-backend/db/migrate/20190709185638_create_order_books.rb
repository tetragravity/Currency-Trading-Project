class CreateOrderBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :order_books do |t|
      t.integer :sum_usd
      t.integer :sum_btc

      t.timestamps
    end
  end
end
