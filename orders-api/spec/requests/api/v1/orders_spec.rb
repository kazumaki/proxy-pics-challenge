require 'rails_helper'

RSpec.describe "Api::V1::Orders", type: :request do
  let (:user) { create(:user) }
  let (:order_list) { create_list(:order, 3, requester: user) }

  describe "GET /orders" do
    it "returns http ok" do
      get "/api/v1/orders", headers: { 'Authorization' => 'Bearer ' + user.id.to_s }
      expect(response).to have_http_status(:ok)
    end

    it "returns http bad request" do
      get "/api/v1/orders", headers: { 'Authorization' => 'Bearer ' + -1.to_s }
      expect(response).to have_http_status(:unauthorized)
    end
  end
end
