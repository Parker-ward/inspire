import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
  let template = ''
  let todos = appState.todos
  appState.todos.forEach(t => template += t.TodoList)
  setHTML('Todo-list', template)
  setText('Todocount', appState.todos.length)

}
export class TodosController {
  constructor() {
    appState.on('todos', _drawTodos)
    this.getTodos()

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

  async setUser() {
    try {
      const username = await Pop.prompt('What is your name')
      todosService.setUser(username)
    } catch (error) {
      Pop.error(error)
    }
  }

  async deletetodo(todolistId) {
    try {
      if (await Pop.confirm()) {
        await todosService.deleteTodo(todolistId)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async completedTodo(todolistId) {
    try {
      await todosService.completedTodo(todolistId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)

    }
  }

  // FIXME create function to edit todo that will flip your 'completed' bool to true and target the checkbox 
  // Look at spellbook for a reference for this
  // the checkbox will need an id that matches the id of the todo 

}