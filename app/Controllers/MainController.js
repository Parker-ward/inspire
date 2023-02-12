import { appState } from "../AppState.js";
import { mainService } from "../Services/MainService.js";
import { Pop } from "../Utils/Pop.js";



function _drawBackground() {
  document.body.style.backgroundImage = `url(${appState.images.url})`
}

export class MainController {

  constructor() {
    this.getImage()
    appState.on('images', _drawBackground)
    console.log('hi');
  }
  async getImage() {
    try {
      await mainService.getImage()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}