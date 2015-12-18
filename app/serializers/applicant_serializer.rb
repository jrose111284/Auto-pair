class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :test_id, :score

end
