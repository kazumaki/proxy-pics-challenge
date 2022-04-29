FactoryBot.define do
  factory :order do
    address { "MyString" }
    requester { nil }
    assignee { nil }
    photos { nil }
    status { "MyString" }
  end
end
