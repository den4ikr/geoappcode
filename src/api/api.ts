import axios from "axios"

const instance = axios.create ({
    baseURL: "api.openweathermap.org/data/2.5/weather",
    headers: {
        "API-KEY": "fed7d1a56fd2de2f78944ed8d70c4f97",
    },
})

export const API = {
    getWeather (q: string) {
        return instance.get (`/${q}`)
    }
}