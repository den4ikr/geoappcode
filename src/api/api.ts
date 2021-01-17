import axios from "axios"

const APIKEY = "fed7d1a56fd2de2f78944ed8d70c4f97"

const instance = axios.create ({
    baseURL: "https://api.openweathermap.org/data/2.5/",
})

export const API = {
    getWeather (q: string) {
        return instance.get (`weather?q=${q}&appid=${APIKEY}`)
    },
    getWeatherByLatAndLon (lat: number, lon: number) {
        return instance.get (`weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    }
}
