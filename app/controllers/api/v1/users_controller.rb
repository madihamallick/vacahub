class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :login]

  # verify_authenticity_token is built-in CSRF protection mechanism that is automatically included as a before_action in the ApplicationController 
  # we are skipping here coz in API-only applications we use jwt(token based) instead of session-based authentication
  skip_before_action :verify_authenticity_token

  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_record

  def index
    users = User.all
    render json: {
        users: users
    }
  end

  def create
    user = User.create!(user_params)
    @token = encode_token(user_id: user.id)
    render json: {
        user: user, 
        token: @token
    }, status: :created
  end

  def login 
    @user = User.find_by!(email: login_params[:email])
    if @user && @user.password_digest ==(login_params[:password_digest])
        @token = encode_token(user_id: @user.id)
        render json: {
            user: @user,
            token: @token
        }, status: :accepted
    else
        render json: {message: 'Incorrect password'}, status: :unauthorized
    end
  end

  def show
  end

  def destroy
  end

  def handle_invalid_record(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  private

  def user_params
      params.require(:user).permit(:name, :email, :password_digest, :phone)
  end

  def login_params 
    params.require(:user).permit(:email, :password_digest)
  end
end
