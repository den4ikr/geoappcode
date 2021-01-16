import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles ({
    mainWrapper: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
    },
    inputBlock: {
        width: "320px",
    }
})

export default useStyles;