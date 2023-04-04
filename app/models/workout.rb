class Workout < ApplicationRecord
    validates :workout_name, presence: true
    belongs_to :user
end
