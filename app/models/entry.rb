class Entry < ApplicationRecord
  belongs_to :user
  validates :title, :content,  presence: true
  # validates :public, presence: true
end

