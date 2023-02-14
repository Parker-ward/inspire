export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
    this.id = data.id
    this.prepared = data.prepared || false

  }

  get TodoList() {
    return `
    <li class="list-group-item d-flex justify-content-between">
              <div>
              <input ${this.completed ? 'checked' : ''} onchange="app.todosController.completedTodo('${this.id}')" class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="firstCheckbox">${this.description}</label>
              </div>
              <button onclick="app.todosController.deletetodo('${this.id}')" type="button"
                class="btn btn-danger btn-small d-flex justify-content-end" mdi mdi-delete></button>
            </li>
    `
  }
}