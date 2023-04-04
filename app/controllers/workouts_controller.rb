class WorkoutsController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        render json: current_user.workouts.all, status: :created
    end

    def create
        workout= Workout.create(workout_params.merge(user_id: session[:user_id]))
        if workout.valid?
            render json: workout, status: :created
        else
            render json: {errors: workout.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    # def render_unprocessable_entity(invalid)
    #     render json: {error: invalid.record.errors}, status: :unprocessable_entity
    # end

    # def record_not_found
    #   render json: { error: "Workout not found" }, status: :not_found
    # end
  
    def workout_params
      params.permit(:workout_name, :areas_targeted, :minutes_to_complete, :date, user_id: session[:user_id])
    end
end
