class User < ApplicationRecord
  has_many :entries
  # validates :name, presence: true, uniqueness: true
  # validates :description, presence: true
end
