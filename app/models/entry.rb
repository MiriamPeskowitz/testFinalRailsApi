class Entry < ApplicationRecord
  belongs_to :user
  # validates :title, :content, :public
end
