class Order < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :assignee, class_name: 'User'
  has_many_attached :photos

  validates :address, presence: true
  validates :requester, presence: true
  validates :assignee, presence: true
  validates :status, presence: true

  def photos_url
    photos.map { |photo| Rails.application.routes.url_helpers.rails_blob_path(photo, only_path: true) }
  end
end
