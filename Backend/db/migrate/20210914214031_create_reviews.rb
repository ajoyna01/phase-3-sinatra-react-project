class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t| 
      t.string :name
      t.integer :rating
      t.string :review
      t.integer :icecream_id
    
    
    end
  
   end
end
