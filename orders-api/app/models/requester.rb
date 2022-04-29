class Requester < ApplicationRecord
  has_many :orders
  has_many :assignees, through: :orders
end
