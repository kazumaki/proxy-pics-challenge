require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  describe "users#create" do
    it "returns http created" do
      # when user is created
      post "/api/v1/users", params: { user: { name: 'Test User' } }
      expect(response).to have_http_status(:created)
    end

    it "returns http bad_request" do
      # when user is not created
      post "/api/v1/users", params: { user: { name: nil } }
      expect(response).to have_http_status(:bad_request)
      expect(JSON.parse(response.body)['errors']['name']).to eq(["can't be blank"])
    end
  end

  describe "users#show" do
    before do
      users = create_list(:user, 3)
    end

    it "returns http ok with the users" do
      # when user_one requests users
      get "/api/v1/users"
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['users'].length).to eq(3)
    end
  end
end
