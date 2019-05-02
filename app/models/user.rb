class User < ApplicationRecord
  has_many :entries
  # validates :name, presence: true, uniqueness: true
  # validates :email, presence: true, uniqueness: true
  # length: { in: 6..20 }
end
