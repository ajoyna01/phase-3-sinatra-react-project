class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :imgURL
      t.integer :user_id
    
    end
  end
end
