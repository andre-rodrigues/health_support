class InterestedUsersController < ApplicationController
  def index
    @interested_user = InterestedUser.new
  end

  def create
    new_user = InterestedUser.new(permited_params)
    head new_user.save ? :created : :bad_request
  end

  private

  def permited_params
    params.require(:interested_user).permit(
      :name, :phone, :specialty, :message, :email
    )
  end
end