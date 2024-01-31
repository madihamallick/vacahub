Rails.application.routes.draw do
  root'home#index'
  get '/*path' => 'home#index'
  namespace :api do
    namespace :v1 do
      get 'users/all', to: 'users#index'
      post 'signup', to: 'users#create'
      post 'login', to: 'users#login'
      get 'user/:id', to: 'users#show'
      delete 'user/:id', to: 'users#destroy'
    end
  end
end
