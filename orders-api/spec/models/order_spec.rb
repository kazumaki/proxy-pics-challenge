require 'rails_helper'

RSpec.describe Order, type: :model do
  it { should belong_to(:requester) }
  it { should belong_to(:assignee) }
  it { should have_many_attached(:photos) }
end
