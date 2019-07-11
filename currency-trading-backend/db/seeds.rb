# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
OrderBook.destroy_all
UserOrder.destroy_all


marcus = User.create( username: "Marcus", portfolio_usd: 20000, portfolio_btc: 3)
linh = User.create( username: "Linh", portfolio_usd: 40200, portfolio_btc: 1)
james = User.create( username: "Marcus", portfolio_usd: 80000, portfolio_btc: 7)

orderbook1 = OrderBook.create( sum_usd: 150300100, sum_btc: 80)

buyOrder1 = UserOrder.create(user_id: marcus.id, typeBuy: true, orderbook_id: orderbook1.id, price: 10500, quantity: 11)
buyOrder2 = UserOrder.create(user_id: marcus.id, typeBuy: true, orderbook_id: orderbook1.id, price: 10700, quantity: 8)
buyOrder3 = UserOrder.create(user_id: marcus.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11000, quantity: 13)
buyOrder4 = UserOrder.create(user_id: linh.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11800, quantity: 8)
buyOrder5 = UserOrder.create(user_id: linh.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11300, quantity: 2.9)
buyOrder6 = UserOrder.create(user_id: linh.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11100, quantity: 2.65)
buyOrder7 = UserOrder.create(user_id: linh.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11300, quantity: 5.90)
buyOrder8 = UserOrder.create(user_id: james.id, typeBuy: true, orderbook_id: orderbook1.id, price: 11900, quantity: 3.39)
buyOrder9 = UserOrder.create(user_id: james.id, typeBuy: true, orderbook_id: orderbook1.id, price: 12050, quantity: 1.59)
buyOrder10 = UserOrder.create(user_id: james.id, typeBuy: true, orderbook_id: orderbook1.id, price: 12000, quantity: 2.59)

sellOrder1 = UserOrder.create(user_id: marcus.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12080, quantity: 0.120)
sellOrder2 = UserOrder.create(user_id: marcus.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12100, quantity: 0.130)
sellOrder3 = UserOrder.create(user_id: linh.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12200, quantity: 0.140)
sellOrder4 = UserOrder.create(user_id: linh.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12300, quantity: 0.15)
sellOrder5 = UserOrder.create(user_id: linh.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12400, quantity: 0.16)
sellOrder6 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 12500, quantity: 0.17)
sellOrder7 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 13700, quantity: 4)
sellOrder6 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 14500, quantity: 8)
sellOrder7 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 14700, quantity: 4)
sellOrder6 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 14750, quantity: 6)
sellOrder7 = UserOrder.create(user_id: james.id, typeBuy: false, orderbook_id: orderbook1.id, price: 14900, quantity: 3)