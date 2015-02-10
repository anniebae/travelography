Rails.application.routes.draw do
  root "home#index"

  get '/about' => "about#index"
  get '/country/wales' => "country#wales"
  get '/country/england' => "country#england"
  get '/country/france' => "country#france"
  get '/country/italy' => "country#italy"
  get '/country/spain' => "country#spain"
  get '/country/scotland' => "country#scotland"
  get '/country/the_netherlands' => "country#the_netherlands"

end
