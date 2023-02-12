import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { saveState } from "../Utils/Store.js";
import { sandboxAPI } from "./AxiosService.js";

class TodosService {

  setUser(username) {
    if (!username) {
      throw new Error('Please input your name')
    }
    appState.user = username
    saveState('user', appState.user)
  }
  async getTodos() {
    const res = await sandboxAPI.get('/api/pward/todos')
    appState.todos = res.data.map(t => new Todo(t))



    // TODO - FINSIH GETTING todos to the page
  }

  async createTodo(formData) {
    const res = await sandboxAPI.post('/api/pward/todos', formData)
    const todo = new Todo(res.data)
    appState.todos.push(todo)
    appState.emit('todos')
  }

  async deleteTodo(todolistId) {
    const res = await sandboxAPI.delete('/api/pward/todos' + todolistId)
    console.log('[removing todo]', res.data);
    appState.todos = appState.todos.filter(todolistId => todolistId != todolistId)
  }

}

export const todosService = new TodosService