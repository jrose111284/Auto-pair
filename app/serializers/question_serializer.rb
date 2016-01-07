class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :question_text, :rspec_test
end
