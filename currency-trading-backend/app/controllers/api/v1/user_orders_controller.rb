class Api::V1::UserOrdersController < ApplicationController
    before_action :set_order, only: [:show, :update, :destroy]

    def index
        userOrders = UserOrder.all
        render json: userOrders
    end
    
    # GET /order/1
    def show
        render json: @UserOrder
    end
    
    # POST /orders
    def create
        @UserOrder = UserOrder.new(order_params)
        if @UserOrder.save
            render json: @UserOrder, status: :created, location: api_v1_user_order_url(@UserOrder)
        else
            render json: @UserOrder.errors, status: :unprocessable_entity
        end
    end
    # PATCH/PUT /orders/1
    def update
        if @UserOrder.update(article_params)
            render json: @UserOrder
        else
            render json: @UserOrder.errors, status: :unprocessable_entity
        end
    end
    
    # DELETE /orders/1
    def destroy
        @UserOrder.destroy
    end
    
    private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
        @UserOrder = UserOrder.find(params[:id])
    end
    # Only allow a trusted parameter “white list” through.
    def order_params
        params.require(:user_order).permit(:user_id, :typeBuy, :orderbook_id, :price, :quantity)
    end

end
