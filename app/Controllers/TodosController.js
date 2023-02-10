import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

export class TodosController {
  constructor() {
    console.log('hello from TodosController');
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
    try {
      await todosService.createTodo()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)

    }
  }
}