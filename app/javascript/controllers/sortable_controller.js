import { Controller } from "stimulus"
import Sortable from "sortablejs"

export default class extends Controller {
  connect() {
    this.sortable = Sortable.create(this.element, {
      group: this.data.get("group"),
      animation: 150,
      onEnd: this.sorted.bind(this)
    })
  }
}
