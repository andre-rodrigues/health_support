class CreateInterestedUsers < ActiveRecord::Migration
  def change
    create_table :interested_users do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :specialty
      t.text :message

      t.timestamps null: false
    end
  end
end
