Rails.application.routes.draw do
  resources :questions
  resources :tests
  resources :applicants
	root 'home#index'
end
