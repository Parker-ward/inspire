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
  }

  async createTodo(formData) {
    const res = await sandboxAPI.post('/api/pward/todos', formData)
    const todo = new Todo(res.data)
    appState.todos.push(todo)
    appState.emit('todos')
  }

  async completedTodo(todolistId) {
    const todoIndex = appState.todos.findIndex(t => t.id == todolistId)
    const foundTodo = appState.todos[todoIndex]
    console.log("[found todos]", foundTodo);
    const res = await sandboxAPI.put(`/pward/todos/${todolistId}`, { completed: foundTodo.completed = true })
    console.log("completed todo", res.data);
    appState.todos.splice(todoIndex, 1, new Todo(res.data))
    appState.emit('todos')
  }

  async deleteTodo(todolistId) {
    const res = await sandboxAPI.delete(`/api/pward/todos/${todolistId}`)
    console.log('[removing todo]', res.data);
    let todoIndex = appState.todos.findIndex(todo => todolistId.Id == todolistId)
    appState.todos.splice(todoIndex, 1)
    appState.emit('todos')
    appState.todos = null
  }

}

export const todosService = new TodosService