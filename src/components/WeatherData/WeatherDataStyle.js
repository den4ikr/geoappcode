import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles ({
    row: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: "50px",

    },
    name: {
        fontSize: "25px",
    },
    country: {
        fontSize: "25px",
    },
    weather: {
        textAlign: "center",
        fontSize: "20px",
    },
})

export default useStyles;