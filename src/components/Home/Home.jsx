import Contact from "../Contact/Contact.jsx"
import Magda from "../../assets/magda.png"
import { Link } from "react-router"
import { FaProjectDiagram } from "react-icons/fa"
import Projects from "../Projects/Projects.jsx"
import { FaTools } from "react-icons/fa"
import Skills from "../Skills/Skills.jsx"
import Career from "../Career/Career.jsx"
import { FaTimeline } from "react-icons/fa6";
import ThankYou from "../ThankYou/ThankYou.jsx"

const Home = () => {
    return (
        <>
        <header className='intro'>
        {/* INTRO SECTION */}
        <div id='profile-photo'>
        <Link to='/about'>
        <img src={Magda} alt='profile photo'/>
        </Link>
        </div>
        <h1>Hi, I'm <span className='link'><Link to='/about'>Magda!</Link></span></h1>
        <p>Junior Software Engineer with a background in project delivery, focused on building clean, user-centred applications.</p>
        <Contact/>
        </header>

        {/* PORTFOLIO SECTION */}
        <main className='portfolio-section'>
        <h2>
        <FaProjectDiagram size={50}/> Selected Projects
        </h2>
        <p className='paragraph'>
            These are some key projects I have worked on, building from sratch across the front and back-end:
        </p>
        <div className='projects'>
            <Projects/>
        </div>
        </main>
        {/* KEY SKILLS */}
        <h2>
        <FaTools size={40}/> Key Skills
        </h2>
        <Skills/>
        {/* WORK EXPERIENCE */}
        <h2><FaTimeline/>Previous Experience</h2>
        <Career/>
        {/* THANK YOU */}
        <ThankYou/>
        {/* FOOTER */}
        
        </>
    )
}

export default Home