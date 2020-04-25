import SortableController from "controllers/sortable_controller"

export default class extends SortableController {
  sorted(event) {
    let id = event.item.dataset.id
    let data = new FormData()
    data.append("list[position]", event.newIndex + 1)

    Rails.ajax({
      url: this.data.get("url").replace(":id", id),
      type: 'PATCH',
      data: data
    })
  }
}
