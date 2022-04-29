class Order < ApplicationRecord
  belongs_to :requester, class_name: 'User', foreign_key: 'requester_id'
  belongs_to :assignee, class_name: 'User', foreign_key: 'assignee_id'
  has_many_attached :photos

  validates :address, presence: true
  validates :requester, presence: true
  validates :assignee, presence: true
end
