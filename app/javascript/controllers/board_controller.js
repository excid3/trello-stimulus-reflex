import SortableController from 'controllers/sortable_controller'

export default class extends SortableController {
  sorted (event) {
    this.lastId = Math.random()
    this.stimulate('ListReflex#move', event.item, {
      position: event.newIndex + 1,
      forceUpdateId: this.lastId
    })
  }

  create_list (event) {
    event.preventDefault()
    let formData = new FormData(event.target)
    let data = Object.fromEntries(formData.entries())
    this.stimulate('ListReflex#create', data)
  }

  reload (event) {
    event.preventDefault()
    this.stimulate('ListReflex#reload')
  }
}
