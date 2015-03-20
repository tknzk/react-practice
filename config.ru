require 'rubygems'
require 'sinatra'

set :public_folder, '/public'
require './app.rb'



run Sinatra::Application
