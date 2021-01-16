import useStyle from "./HeaderStyle"

const Header: React.FunctionComponent = () => {
    const s = useStyle ()

    return (
        <div className = {s.header} >
            <div className = {s.title} >
                Open Weather Map
            </div>
        </div>
    )
}

export default Header;