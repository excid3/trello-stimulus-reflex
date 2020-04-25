class List < ApplicationRecord
  has_many :todos, -> { order(position: :asc) }, dependent: :destroy

  acts_as_list

  validates :name, presence: true
end
