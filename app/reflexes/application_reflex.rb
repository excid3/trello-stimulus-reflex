# frozen_string_literal: true

class ApplicationReflex < StimulusReflex::Reflex
  include CableReady::Broadcaster

  private

  def force_update(id)
    cable_ready["StimulusReflex::Channel"].dispatch_event(name: "force:update", detail: {id: id})
    cable_ready.broadcast
  end

  def reload
    # noop: this method exists so we can refresh the DOM
  end
end
