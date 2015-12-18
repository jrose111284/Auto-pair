Rails.application.routes.draw do
  resources :applicants
	
	root 'home#index'
end
