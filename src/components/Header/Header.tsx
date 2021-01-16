import useStyle from "./HeaderStyle"

const Header: React.FunctionComponent = () => {
    const s = useStyle ()

    return (
        <div className = {s.header} >
            <div className = {s.title} >
                Header
            </div>
        </div>
    )
}

export default Header;