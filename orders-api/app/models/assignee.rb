class Assignee < ApplicationRecord
  has_many :orders
  has_many :requesters, through: :orders
end
