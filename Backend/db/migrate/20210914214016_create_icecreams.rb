class CreateIcecreams < ActiveRecord::Migration[6.1]
  def change
    create_table :icecreams do |t| 
      t.string :brand
      t.string :imgURL
      t.string :flavor
    end
  end
end
