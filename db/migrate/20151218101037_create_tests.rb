class CreateTests < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :description
      t.integer :pass_score

      t.timestamps null: false
    end
  end
end
