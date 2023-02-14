import { appState } from "../AppState.js";
import { Main } from "../Models/Main.js";
import { sandboxAPI } from "./AxiosService.js";

class MainService {

  async getImage() {
    const res = await sandboxAPI.get('/api/images')
    appState.images = new Main(res.data)
    // console.log(appState.images);
  }

  async getTime() {

  }

  async getQuote() {
    const res = await sandboxAPI.get('api/quotes')
    // console.log('getting quote info', res.data);
    appState.quotes = new Main(res.data)
    // console.log('this is my quote in the appstate', appState.quotes);
  }
}

export const mainService = new MainService()