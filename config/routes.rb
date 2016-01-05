Rails.application.routes.draw do
  resources :questions
  resources :tests
root "home#index"
end
