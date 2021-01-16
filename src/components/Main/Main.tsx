import { useState } from "react";
import { WeatherResponseType } from "../../types/types";

type MainPropsType = {
    data: WeatherResponseType,
    getWeather: (q: string) => void,
}

const Main: React.FunctionComponent <MainPropsType> = (props) => {

    const [ query, setQuery ] = useState ("");
    const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery (e.target.value)
    }
    const getDataHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            props.getWeather (query)
        }
    }
   
    
    

    return (
        <div>
            <div>
                <input onKeyPress = { getDataHandler } onChange = { onChangeHadler } type = "text" value = { query } />
            </div>
            {props.data.weather &&
                <div>
                    <div>
                        {props.data.name},
                    </div>
                    <div>
                        {props.data.sys.country}
                    </div>
                    <div>
                        {/* @ts-ignore */}
                        {props.data.weather[0].main}
                    </div>
                </div>
            }
        </div>
    )
}

export default Main;