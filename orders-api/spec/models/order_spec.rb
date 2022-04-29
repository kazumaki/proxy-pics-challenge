require 'rails_helper'

RSpec.describe Order, type: :model do
  it { should belong_to(:requester).class_name('User').with_foreign_key('requester_id') }
  it { should belong_to(:assignee).class_name('User').with_foreign_key('assignee_id') }
  it { should have_many_attached(:photos) }
  it { should validate_presence_of(:requester) }
  it { should validate_presence_of(:assignee) }
  it { should validate_presence_of(:address) }
end
