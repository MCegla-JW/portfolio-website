import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BsFiletypeJsx } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMiro } from "react-icons/si";


const Skills = () => {
    return (
        <>
        <div className='skills-list'>
        <h3>Core Technologies</h3>
        <div className="react">
            <FaReact/> React
        </div>
            <div className="javascript">
            <IoLogoJavascript/> JavaScript (ES6)
        </div>
        <div className="python">
            <FaPython/> Python
        </div>
        <div className="django">
            <SiDjango/> Django
        </div>
        <div className="node-js">
            <FaNodeJs/> Node.js
        </div>
        <h3>Styling & UI</h3>
        <div className="html">
            <FaHtml5/> HTML5
        </div>
        <div className="css">
            <FaCss3Alt/> CSS3
        </div>
        <div className="tailwind">
            <RiTailwindCssFill/> Tailwind
        </div>
        <div className="jsx">
            <BsFiletypeJsx/> JSX
        </div>
        <h3>Databases</h3>
        <div className="mongo-db">
            <SiMongodb/> MongoDB
        </div>
        <div className="postgresql">
            <DiPostgresql/> PostgreSQL
        </div>
        <h3>Tools & Deployment</h3>
        <div className="github">
            <FaGithub/> GitHub
        </div>
        <div className="express">
            <SiExpress/> Express
        </div>
        <div className="postman">
            <SiPostman/> Postman
        </div>
        <div className="netlify">
            <SiNetlify/> Netlify
        </div>
        <div className="vercel">
            <IoLogoVercel/> Vercel
        </div>
        <div className="heroku">
            <GrHeroku/> Heroku
        </div>
        <div className="figma">
            <FaFigma/> Figma
        </div>
        <div className="miro">
            <SiMiro/> Miro
        </div>
        </div>
        </>
    )
}

export default Skills 