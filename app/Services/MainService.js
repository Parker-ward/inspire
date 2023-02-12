import { appState } from "../AppState.js";
import { sandboxAPI } from "./AxiosService.js";

class MainService {

  async getImage() {
    const res = await sandboxAPI.get('/api/images')
    appState.images = new Image(res.data)
    console.log(appState.images);
  }
}

export const mainService = new MainService()