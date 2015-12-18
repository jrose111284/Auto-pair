class ApplicantsController < ApplicationController
  respond_to :json

  def index
    respond_with Applicant.all
  end

  def show
    respond_with Applicant.find(params[:id])
  end

  def create
    respond_with Applicant.create(params[:applicant])
  end

  def update
    respond_with Applicant.update(params[:id], params[:applicant])
  end

  def destroy
    respond_with Applicant.destroy(params[:id])
  end
end
