import { sandboxAPI } from "./AxiosService.js";

class TodosService {
  async getTodos() {
    const res = await sandboxAPI.get('/api/pward/todos')
    console.log('[my todos]', res.data);
  }

  async createTodo() {
    const res = await sandboxAPI.post('/api/pward/todos')
  }

}

export const todosService = new TodosService