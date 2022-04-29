require 'rails_helper'

RSpec.describe Requester, type: :model do
  it { should have_many(:orders) }
  it { should have_many(:assignees).through(:orders) }
end
