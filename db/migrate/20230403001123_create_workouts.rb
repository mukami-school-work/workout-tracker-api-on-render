class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :workout_name
      t.text :areas_targeted
      t.integer :minutes_to_complete
      t.string :date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
