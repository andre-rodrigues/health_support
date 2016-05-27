Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)

  root 'application#index'
  get 'institucional', as: :institutional, controller: 'static_pages', action: 'index', page: 'institutional'
  get 'juridico', as: :legal, controller: 'static_pages', action: 'index', page: 'legal'
  get 'marketing', as: :marketing, controller: 'static_pages', action: 'index', page: 'marketing'
  get 'estrutura-fisica', as: :'physical-environment', controller: 'static_pages', action: 'index', page: 'physical-environment'
  get 'sistema', as: :'system', controller: 'static_pages', action: 'index', page: 'system'
  get 'tributario', as: :tributary, controller: 'static_pages', action: 'index', page: 'tributary'

  resources :interested_users, only: [:index, :create]
end
