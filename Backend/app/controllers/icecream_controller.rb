class IcecreamController < ApplicationController
  
  get "/home" do
    
   Icecream.all.to_json
  end

end