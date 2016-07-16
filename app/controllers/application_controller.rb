class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  layout 'home'

  def index
  end

  def home_contact
    ApplicationMailer.home_contact(
      params[:name],
      params[:email],
      params[:specialty],
      params[:message],
    ).deliver_now

    redirect_to root_path
  end
end
