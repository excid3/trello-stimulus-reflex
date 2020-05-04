import SortableController from "controllers/sortable_controller"

export default class extends SortableController {
  sorted(event) {
    this.lastId = Math.random()
    this.stimulate("TodoReflex#move", event.item, {
      position: event.newIndex + 1,
      list_id: event.to.dataset.id,
      forceUpdateId: this.lastId
    })
  }
}
