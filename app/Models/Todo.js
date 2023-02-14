export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
    this.id = data.id
    this.prepared = data.prepared || false

  }
  // FIXME add an onchange
  get TodoList() {
    return `
    <li class="list-group-item">
              <input ${this.prepared ? 'checked' : ''}onchange="app.todosController.completedTodo('${this.id}')" class="form-check-input me-1" type="checkbox" value="">
              <label class="form-check-label" for="firstCheckbox">${this.description}</label>
              <button onclick="app.todosController.deletetodo('${this.id}')" type="button"
                class="btn btn-danger btn-small d-flex justify-content-end" mdi mdi-delete></button>
            </li>
    `
  }
}