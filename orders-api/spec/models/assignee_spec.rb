require 'rails_helper'

RSpec.describe Assignee, type: :model do
  it { should have_many(:orders) }
  it { should have_many(:requesters).through(:orders) }
end
