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
import{ Button } from '@headlessui/react'
import NavBar from "../NavBar/NavBar.jsx"

const Home = () => {
    return (
        <>
        <NavBar/>
        <header className='intro'>
        {/* INTRO SECTION */}
        <div className='flex flex-col items-center gap-4 max-w-xl mx-auto p-6 text-center'>
        <div id='profile-photo' className='w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-gray-500'>
        <Link to='/about'>
        <img src={Magda} alt='profile photo' className='w-full h-full object-cover'/>
        </Link>
        </div>
        <h1>Hi, I'm <span className='link'><Link to='/about'>Magda!</Link></span></h1>
        <p>Junior Software Engineer with a background in project delivery, focused on building clean, user-centred applications.</p>

        <Contact/>
        </div>
        </header>

        {/* PORTFOLIO SECTION */}
        <main className='portfolio-section'>
        <h2 id='selected-projects' className='text-2xl font-bold text-center mb-6 flex items-center justify-center gap-4 flex-row mt-3'>
        <FaProjectDiagram size={50}/> Selected Projects
        </h2>
        <p className='paragraph text-2xl font-bold text-center mb-6 flex items-center justify-center gap-4 flex-row'>
            These are some key projects I have worked on, building from scratch across the front and back-end:
        </p>
        <div className='projects'>
            <Projects/>
        </div>
        </main>
        {/* KEY SKILLS */}
        <h2 id='key-skills' className='text-2xl font-bold text-center mb-6 flex items-center justify-center gap-4 flex-row'>
        <FaTools size={40}/> Key Skills
        </h2>
        <Skills/>
        {/* WORK EXPERIENCE */}
        <h2 id='previous-experience' className='text-2xl font-bold text-center mb-6 flex items-center justify-center gap-4 flex-row'><FaTimeline/>Previous Experience</h2>
        <p className='paragraph text-2xl font-bold text-center mb-6 flex items-center justify-center gap-4 flex-row'>
            I have extensive extensive experience in project management and I am exicted to combine it with my new software engineering skils to deliver top-class products.
        </p>
        <Career/>
        {/* THANK YOU */}
        <ThankYou/>
        {/* FOOTER */}

        </>
    )
}

export default Home