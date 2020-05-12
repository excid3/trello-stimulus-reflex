class List < ApplicationRecord
  include CableReady::Broadcaster
  after_save do
    cable_ready["lists"].inner_html(
      selector: "#lists",
      html: ApplicationController.renderer.render(partial: "lists/list", collection: List.order(position: :asc))
    )
    cable_ready.broadcast
  end

  has_many :todos, -> { order(position: :asc) }, dependent: :destroy

  acts_as_list

  validates :name, presence: true
end
