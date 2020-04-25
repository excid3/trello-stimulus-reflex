class Todo < ApplicationRecord
  belongs_to :list

  acts_as_list scope: :list

  validates :description, presence: true
end
