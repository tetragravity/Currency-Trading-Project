class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :username
      t.integer :portfolio_usd 
      t.integer :portfolio_btc
      t.timestamps
    end
  end
end
