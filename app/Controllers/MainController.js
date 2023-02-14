import { appState } from "../AppState.js";
import { mainService } from "../Services/MainService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawBackground() {
  document.body.style.backgroundImage = `url(${appState.images.url})`
}

// TODO create a draw function for the time 
// Reference NasaAPOD 
// Look at .ToLocalTimeString() to format your time - this is very similar to how we did time in jot 


function _drawQuote() {
  // let template = ''
  // appState.quotes.forEach(quote => template += quote.Quotes)
  // setHTML('quote', template)
  setHTML('Quote', appState.quotes.Quotes)

}

// let time = new Date().toLocaleTimeString()

function _drawTime() {
  let time = new Date().toLocaleTimeString()
  document.getElementById('currentTime').innerHTML = time
}



export class MainController {

  constructor() {
    this.getImage()
    this.getQuote()
    _drawTime()
    appState.on('quotes', _drawQuote)
    appState.on('images', _drawBackground)
    setInterval(_drawTime, 1000)



  }
  async getImage() {
    try {
      await mainService.getImage()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getQuote() {
    try {
      await mainService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}