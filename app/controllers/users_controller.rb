class UsersController < ApplicationController
    # wrap_parameters format: []
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
  end


    def show
        user = User.find(session[:user_id])
        if user.valid?
        render json: user, status: :created 
     else
         render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
      end
    end

    private
    def user_params
      params.permit(:username, :email, :password)
    end

    # def render_unprocessable_entity(invalid)
    #   render json: {error: invalid.record.errors}, status: :unprocessable_entity
    # end
end
