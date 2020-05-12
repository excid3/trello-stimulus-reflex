class ListsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "lists"
  end
end
