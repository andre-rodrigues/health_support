class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @interested_user = InterestedUser.new
  end

  def create
    InterestedUser.create(permited_params)
    redirect_to root_path
  end

  private

  def permited_params
    params.require(:interested_user).permit(
      :name, :phone, :specialty, :message, :email
    )
  end
end
