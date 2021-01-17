import { useState } from "react"
import { WeatherResponseType } from "../../types/types"
import Preloader from "../Preloader/Preloader"
import WeatherData from "../WeatherData/WeatherData"
import useStyle from "./MainStyle"

type MainPropsType = {
    data: WeatherResponseType,
    getWeather: (q: string) => void,
}

const Main: React.FunctionComponent <MainPropsType> = (props) => {
    const s = useStyle ()

    const [ query, setQuery ] = useState ("");
    const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery (e.target.value)
    }
    const getDataHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (!query.length) {
                alert ("Enter a city name")
            } else {
                props.getWeather (query)
                setQuery ("")
            }
        }
    }
   
    
    

    return (
        <div className = {s.mainWrapper} >
            <div className = {s.inputBlock} >
                <input placeholder = "Enter a city name" className = "form-control" onKeyPress = { getDataHandler } onChange = { onChangeHadler } type = "text" value = { query } />
            </div>
            {props.data.weather 
                ? <WeatherData data = {props.data} />
                : <Preloader />
            }
        </div>
    )
}

export default Main;
