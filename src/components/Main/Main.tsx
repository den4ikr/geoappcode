import { useState } from "react";

const Main: React.FunctionComponent = () => {

    const [ query, setQuery ] = useState ("");
    const onChangeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery (e.target.value)
    }

    return (
        <div>
            <div>
                <input onChange = { onChangeHadler } type = "text" value = { query } />
            </div>
        </div>
    )
}

export default Main;