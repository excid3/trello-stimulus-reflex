import ApplicationController from './application_controller'
import Sortable from "sortablejs"

export default class extends ApplicationController {
  connect() {
    super.connect()
    this.sortable = Sortable.create(this.element, {
      group: this.data.get("group"),
      animation: 150,
      onEnd: this.sorted.bind(this)
    })
  }
}
