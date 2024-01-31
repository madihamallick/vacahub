class ApplicationController < ActionController::Base
    before_action :authorized

    def encode_token(payload)
        JWT.encode(payload, Rails.application.credentials.dig(:JWT_SECRET)) 
    end

    def decoded_token
        header = request.headers['Authorization']
        if header
            token = header.split(" ")[1]
            begin
                JWT.decode(token, Rails.application.credentials.dig(:JWT_SECRET), true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user 
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find_by(id: user_id)
        end
    end

    def authorized
        # !! --> convert the current user object into a boolean value
        unless !!current_user
        # render json: { messsage: 'Please log in' }, status: :unauthorized
        end
    end
end
