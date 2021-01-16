import { WeatherResponseType } from "../../types/types"
import useStyle from "./WeatherDataStyle"

type WeatherDataPropsType = {
    data: WeatherResponseType,
}

const WeatherData: React.FunctionComponent <WeatherDataPropsType> = (props) => {
    const s = useStyle ()

    return (
        <div>
            <div className = {s.row} >
                <div className = {s.name} >
                    {props.data.name},
                </div>
                <div className = {s.country} >
                    {props.data.sys.country}
                </div>
            </div>
            <div className = {s.weather} >
                {/* @ts-ignore */}
                {props.data.weather[0].main}
            </div>
        </div>
    )
}

export default WeatherData;