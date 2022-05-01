class User < ApplicationRecord
  has_many :assignee_orders, class_name: 'Order', foreign_key: 'assignee_id'
  has_many :requester_orders, class_name: 'Order', foreign_key: 'requester_id'
  
  validates :name, presence: true, length: { maximum: 20 }

  def orders
    assignee_orders.or(requester_orders)
  end
end
