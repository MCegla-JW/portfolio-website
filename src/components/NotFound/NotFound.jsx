import { Link } from "react-router"

const NotFound = () => {
    return (
        <>
        <h1>Oops! Nothing found here.</h1>
        <button type='button'><Link to='/'>Back</Link></button>
        </>
    )
}

export default NotFound