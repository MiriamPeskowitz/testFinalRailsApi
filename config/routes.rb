Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :destroy, :update] do
        resources :entries, only: [:create, :destroy, :update]
      end
      resources :entries, only: [:index]
    end
  end
end
