class Api::V1::UsersController < ApplicationController
  def create
    user = User.create(create_params)
    if user.valid?
      render json: { user: user }, status: :created
    else
      render json: { errors: user.errors }, status: :bad_request
    end
  end

  def index
    users = User.all
    render json: { users: users }, status: :ok  
  end

  private
  def create_params
    params.require(:user).permit(:name)
  end
end
