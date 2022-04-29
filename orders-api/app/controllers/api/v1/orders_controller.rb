class Api::V1::OrdersController < ApplicationController
  def index
    return render json: { error: 'User not found' }, status: :unauthorized unless current_user

    requester_orders = current_user.requester_orders
    assignee_orders = current_user.assignee_orders

    render json: { requester_orders: requester_orders, assignee_orders: assignee_orders }, status: :ok
  end

  private
  def current_user
    user_id = request.headers['Authorization'].split(' ').last
    User.find_by(id: user_id)
  end
end
