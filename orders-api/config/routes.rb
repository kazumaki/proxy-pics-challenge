Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :orders, only: [:index, :create, :show, :update]
      resources :users, only: [:index, :create]
    end
  end
end
