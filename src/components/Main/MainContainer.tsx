import { connect } from "react-redux"
import { AppStateType } from "../../redux/redux-store"
import Main from "./Main"
import { getWeather } from "../../redux/main-reducer"
import { useEffect } from "react"
import { WeatherResponseType } from "../../types/types"

type PropsType = {
    data: WeatherResponseType,
    getWeather: (q: string) => void,
}

const MainContainer: React.FunctionComponent <PropsType> = (props) => {

    return (
        <Main { ...props } />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        data: state.main.data,
    }
}

export default connect ( mapStateToProps, {getWeather} )(MainContainer);