Rails.application.routes.draw do
  # resources :workouts
  # resources :users

  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  post "/login", to: "auth#create"
  delete "/logout", to: "auth#destroy"

  #workouts route
 get "/workouts", to: "workouts#index"
 post "/workouts", to: "workouts#create"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
