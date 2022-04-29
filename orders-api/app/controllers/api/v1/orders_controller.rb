class Api::V1::OrdersController < ApplicationController
  before_action :authenticate_user

  def index
    requester_orders = @current_user.requester_orders
    assignee_orders = @current_user.assignee_orders

    render json: { requester_orders: requester_orders, assignee_orders: assignee_orders }, status: :ok
  end

  def show
    order = @current_user.orders.find_by(id: params[:id])
    return render json: { error: 'Order not found' }, status: :not_found unless order
      
    render json: order, methods: [:photos_url], status: :ok
  end

  def create
    assignee = User.find_by(id: create_params[:assignee_id])

    return render json: { error: 'Assignee not found' }, status: :not_found unless assignee
    return render json: { error: 'Requester and assignee cannot be the same' }, status: :bad_request if @current_user.id == assignee.id

    order = Order.new(create_params)
    order.requester = @current_user
    order.assignee = assignee

    return render json: { error: order.errors.full_messages.to_sentence }, status: :bad_request unless order.save

    render json: order, status: :created
  end

  def update
    order = @current_user.orders.find_by(id: update_params[:id])
    return render json: { error: 'Order not found' }, status: :not_found unless order
    return render json: { error: 'Photos need to be present' }, status: :bad_request unless update_params[:photos]
    order.photos.attach(update_params[:photos])
    return render json: { error: 'Unable to save photos'}, status: :bad_request unless order.photos.attached?
    order.update(status: 'Completed')
    render json: order, status: :ok
  end

  private
  def show_params
    params.permit(:id)
  end

  def create_params
    params.require(:order).permit(:assignee_id, :address).merge(status: 'Pending')
  end

  def update_params
    params.require(:order).permit(:id, :photos => [])
  end

  def authenticate_user
    user_id = request.headers['Authorization'].split(' ').last
    @current_user = User.find_by(id: user_id)
    return render json: { error: 'User not found' }, status: :unauthorized unless @current_user
  end
end
