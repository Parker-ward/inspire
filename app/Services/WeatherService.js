import { appState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandboxAPI } from "./AxiosService.js"

class WeatherService {

  async getTemp() {
    const res = await sandboxAPI.get('/api/weather/')
    appState.weather = new Weather(res.data)
  }

}


export const weatherService = new WeatherService()