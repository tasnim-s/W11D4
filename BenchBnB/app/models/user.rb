class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token
        generate_token
        save!
        session_token
    end

    private 

    def ensure_session_token
        self.session_token ||= generate_token
    end

    def generate_token
        self.session_token = SecureRandom::urlsafe_base64
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom::urlsafe_base64
        end
        self.session_token
    end
end
