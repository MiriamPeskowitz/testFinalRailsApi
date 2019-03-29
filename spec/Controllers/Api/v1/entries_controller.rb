require 'rails_helper'

RSpec.describe Api::V1::EntriesController, "#index", type: :controller do
    it "should display index" do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end 

    # it "contains expected attributes in the JSON body response" do 
    #   json_response= JSON.parse(response.body)
    #   expect(hash_body.keys).to match_array([:id, :name, :description])
    # end
end 