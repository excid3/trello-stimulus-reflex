import SortableController from "controllers/sortable_controller"

export default class extends SortableController {
  sorted(event) {
    let id = event.item.dataset.id
    let data = new FormData()
    data.append("todo[position]", event.newIndex + 1)
    data.append("todo[list_id]", event.to.dataset.listId)

    Rails.ajax({
      url: this.data.get("url").replace(":id", id),
      type: 'PATCH',
      data: data
    })
  }
}
