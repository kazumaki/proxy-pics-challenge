require 'rails_helper'

RSpec.describe "Orders", type: :request do
  describe "GET /index" do
    it "returns http ok" do
      get "/index/requester/1"  
      expect(response).to have_http_status(:ok)

      get "/index/assignee/1"
      expect(response).to have_http_status(:ok)
    end

    it "returns http bad request" do
      get "/index/invalid/1"
      expect(response).to have_http_status(:bad_request)
    end
  end
end
