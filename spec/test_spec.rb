require "rails_helper"

describe Test, type: :model do
  it { is_expected.to have_many :questions }
end