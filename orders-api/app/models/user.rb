class User < ApplicationRecord
  has_many :assignee_orders, class_name: 'Order', foreign_key: 'assignee_id'
  has_many :requester_orders, class_name: 'Order', foreign_key: 'requester_id'
end
