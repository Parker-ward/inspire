import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";



function _getWeather() {

}

export class WeatherController {

  constructor() {
    this.getTemp
    console.log(res.data);
  }

  async getTemp() {
    try {
      await weatherService.getTemp()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }


}
