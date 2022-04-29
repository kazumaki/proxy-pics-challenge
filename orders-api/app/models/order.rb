class Order < ApplicationRecord
  belongs_to :requester
  belongs_to :assignee
  has_many_attached :photos
end
