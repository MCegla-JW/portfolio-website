import Contact from "../Contact/Contact.jsx"
import Magda from '../../assets/magda.png'
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
        {/* INTRO SECTION */}
        <div id='profile-photo'>
        <Link to='/about'>
        <img src={Magda} alt='profile photo'/>
        </Link>
        </div>
        <h1>Hi, I'm <span className='link'><Link to='/about'>Magda!</Link></span></h1>
        <p>Junior Software Engineer with a background in project delivery, focused on building clean, user-centred applications.</p>
        <Contact/>
        </>
    )
}

export default Home