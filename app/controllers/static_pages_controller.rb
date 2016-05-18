class StaticPagesController < ApplicationController

  def index
    render params[:page]
  end

end
