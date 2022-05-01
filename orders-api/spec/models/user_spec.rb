require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many(:assignee_orders).class_name('Order').with_foreign_key('assignee_id') }
  it { should have_many(:requester_orders).class_name('Order').with_foreign_key('requester_id') }
  it { should validate_presence_of(:name) }
  it { should validate_length_of(:name).is_at_most(20) }
end
