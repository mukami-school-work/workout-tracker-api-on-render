class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :workout_name, :areas_targeted, :minutes_to_complete, :date
  has_one :user
end
