import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
  let template = ''
  appState.todos.forEach(t => template += t.TodoList)
  setHTML('Todo-list', template)

}
export class TodosController {
  constructor() {
    console.log('hello from TodosController');
    this.getTodos()
    _drawTodos
  }
  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async createTodo() {
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    try {
      await todosService.createTodo(formData)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)

    }
  }
}