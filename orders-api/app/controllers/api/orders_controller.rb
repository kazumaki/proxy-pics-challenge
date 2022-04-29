module Api
  class OrdersController < ApplicationController
    def index
      return head :bad_request unless index_params[:user_type] == 'requester' || index_params[:user_type] == 'assignee'
  
      if params[:user_type] == "requester"
        @orders = Order.where(requester_id: params[:user_id])
      elsif params[:user_type] == "assignee"
        @orders = Order.where(assignee_id: params[:user_id])
      end
      render json: @orders, status: :ok
    end
  
    def show
  
    end
  
    def create
  
    end
  
    private
    def index_params
      params.permit(:user_id, :user_type)
    end
  
    def show_params
  
    end
  end  
end
