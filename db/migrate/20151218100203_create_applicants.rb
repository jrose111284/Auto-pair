class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.text :name
      t.text :email
      t.integer :test_id
      t.integer :score

      t.timestamps null: false
    end
  end
end
