import { appState } from "../AppState.js";
import { Main } from "../Models/Main.js";
import { sandboxAPI } from "./AxiosService.js";

class MainService {

  async getImage() {
    const res = await sandboxAPI.get('/api/images')
    appState.images = new Main(res.data)
    console.log(appState.images);
  }
}

export const mainService = new MainService()