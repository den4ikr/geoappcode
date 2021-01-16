import axios from "axios"

export const API = {
    getWeather (q: string) {
        return axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=fed7d1a56fd2de2f78944ed8d70c4f97`)
    }
}