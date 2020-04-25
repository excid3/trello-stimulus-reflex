import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "toggleable" ]

  toggle(event) {
    event.preventDefault()
    this.toggleableTarget.classList.toggle(this.data.get("class"))
  }
}
