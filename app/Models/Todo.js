export class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.user = data.user
  }

  get TodoList() {
    return `
    <li class="list-group-item">
              <input class="form-check-input me-1" type="checkbox" value="">
              <label class="form-check-label" for="firstCheckbox">${this.description}</label>
            </li>
    `
  }
}