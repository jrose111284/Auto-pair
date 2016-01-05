class QuestionsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  before_action :set_question, only: [:show, :update, :destroy]

  def index
    @questions = Question.all

    render json: @questions
  end

  # GET /tests/1
  def show
    render json: @question
  end

  # POST /tests
  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tests/1
  def update
    if @question.update(question_params)
      render json: @questions
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tests/1
  def destroy
    @question.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:question_text, :rspec_test)
    end

end
