require 'rails_helper'

RSpec.describe "Api::V1::Orders", type: :request do
  let (:user_one) { create(:user) }
  let (:user_two) { create(:user) }
  let (:user_three) { create(:user) }
  let! (:order_list) { create_list(:order, 3, requester: user_one, assignee: user_two) }
  # create a blob to attach to the order photos using an image file
  let (:image_file) { fixture_file_upload(File.open(Rails.root.join('spec', 'fixtures', 'images', 'test.png')), 'image/png') }


  describe "orders#index" do
    it "returns http ok" do
      # when user_one requests orders
      get "/api/v1/orders", headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)['requester_orders'].length).to eq(order_list.length)
    end

    it "returns http unauthorized" do
      # when current user does not exist
      get "/api/v1/orders", headers: { 'Authorization' => 'Bearer ' + -1.to_s }
      expect(response).to have_http_status(:unauthorized)
    end
  end
  
  describe "orders#show" do
    it "returns http ok" do
      # when user_one requests order
      get "/api/v1/orders/#{order_list.first.id}", headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:ok)
    end

    it "returns http not_found" do
      # when order does not exist
      get "/api/v1/orders/-1", headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:not_found)

      # when the current user does not have any order
      get "/api/v1/orders/#{order_list.first.id}", headers: { 'Authorization' => 'Bearer ' + user_three.id.to_s }
      expect(response).to have_http_status(:not_found)
    end

    it "returns http unauthorized" do
      # when current user does not exist
      get "/api/v1/orders/#{order_list.first.id}", headers: { 'Authorization' => 'Bearer ' + -1.to_s }
      expect(response).to have_http_status(:unauthorized)
    end
  end

  describe "orders#create" do
    it "returns http created" do
      # when user_one creates order
      post "/api/v1/orders", params: { order: { assignee_id: user_three.id, address: '123 Fake St.' } }, headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:created)
    end

    it "returns http bad_request" do
      # when requester and assignee are the same
      post "/api/v1/orders", params: { order: { assignee_id: user_one.id, address: '123 Fake St.' } }, headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:bad_request)
    end

    it "returns http unauthorized" do
      # when current user does not exist
      post "/api/v1/orders", params: { order: { assignee_id: user_three.id, address: '123 Fake St.' } }, headers: { 'Authorization' => 'Bearer ' + -1.to_s }
      expect(response).to have_http_status(:unauthorized)
    end

    it "returns http not_found" do
      # when assignee does not exist
      post "/api/v1/orders", params: { order: { assignee_id: -1, address: '123 Fake St.' } }, headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:not_found)
    end
  end

  describe "orders#update" do
    it "returns http ok" do
      # when user_one updates order
      patch "/api/v1/orders/#{order_list.first.id}", params: { order: { id: user_one.orders.first.id, photos: [image_file]} }, headers: { 'Authorization' => 'Bearer ' + user_one.id.to_s }
      expect(response).to have_http_status(:ok)
    end
  end
end
