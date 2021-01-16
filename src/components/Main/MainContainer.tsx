import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import Main from "./Main"
import { getWeather, getWeatherByCoordinates } from "../../redux/main-reducer"
import { useEffect } from "react"
import { WeatherResponseType } from "../../types/types"

type PropsType = {
    data: WeatherResponseType,
    getWeather: (q: string) => void,
    getWeatherByCoordinates: (lat: number, lon: number) => void,
}

const MainContainer: React.FunctionComponent <PropsType> = (props) => {

    useEffect ( () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                props.getWeatherByCoordinates (position.coords.latitude, position.coords.longitude)
              });;
        } else {
            console.log("UNVALIABLE user geolocation");
        }
    }, [] )

    return (
        <Main { ...props } />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        data: state.main.data,
    }
}

export default connect ( mapStateToProps, {getWeather, getWeatherByCoordinates} )(MainContainer);