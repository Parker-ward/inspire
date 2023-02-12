import { MainController } from "./Controllers/MainController.js";
import { TodosController } from "./Controllers/TodosController.js";

class App {
  todosController = new TodosController
  mainController = new MainController
}

window["app"] = new App();
