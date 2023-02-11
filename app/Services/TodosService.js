import { sandboxAPI } from "./AxiosService.js";

class TodosService {
  async getTodos() {
    const res = await sandboxAPI.get('/api/pward/todos')
    console.log('[my todos]', res.data);

    // TODO - FINSIH GETTING todos to the page
    // appState.todos = res.data.map(t =>)
  }

  async createTodo(formData) {
    const res = await sandboxAPI.post('/api/pward/todos', formData)

  }

}

export const todosService = new TodosService