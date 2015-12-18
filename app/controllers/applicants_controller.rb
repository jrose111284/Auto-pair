class ApplicantsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format      == 'application/json' }

  before_action :set_applicant, only: [:show, :update, :destroy]

  def index
    @applicants = Applicant.all

    render json: @applicants
  end

  # GET /applicantss/1
  def show
    render json: @applicant
  end

  # POST /applicantss
  def create
    @applicant = Applicant.new(applicant_params)

    if @applicant.save
      render json: @applicant, status: :created, location: @applicant
    else
      render json: @applicant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /applicantss/1
  def update
    if @applicant.update(applicant_params)
      render json: @applicants
    else
      render json: @applicant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /applicantss/1
  def destroy
    @applicants.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_applicant
      @applicant = Applicant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def applicant_params
      params.require(:applicant).permit(:name, :email, :test_id, :score)
    end
end




end
