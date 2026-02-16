import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { GrHeroku } from 'react-icons/gr';
import { SiNetlify } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BsFiletypeJsx } from 'react-icons/bs';
import { SiPostman } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { SiMiro } from 'react-icons/si';
import { Button } from '@headlessui/react'
import { SiTypescript } from "react-icons/si";

const Skills = () => {
    return (
        <>
        <div className='skills-list max-w-5xl mx-auto my-10 p-6 bg-base-200 rounded-lg shadow-lg'>
        {/* Section Title */}
        <h3 className='text-2xl font-bold text-center mb-6'>Core Technologies</h3>
        {/* Button Row */}
        <div className='flex flex-wrap justify-center gap-4'>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaReact size={25}/> React</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><IoLogoJavascript size={25}/> JavaScript (ES6)</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiTypescript size={25}/> TypeScript</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaPython size={25}/> Python</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiDjango size={25}/> Django</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaNodeJs size={25}/> Node.js</Button>
        </div>
        {/* Styling Section */}
        <h3 className='text-2xl font-bold text-center mt-8 mb-6'>Styling & UI</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaHtml5 size={25}/> HTML5</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaCss3Alt size={25}/> CSS3</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><RiTailwindCssFill size={25}/> Tailwind</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><BsFiletypeJsx size={25}/> JSX</Button>
        </div>
        {/* Databases Section */}
        <h3 className='text-2xl font-bold text-center mt-8 mb-6'>Databases</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiMongodb size={25}/> MongoDB</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><DiPostgresql size={25}/> PostgreSQL</Button>
        </div>
        {/* Toold & Deployment Section */}
        <h3 className='text-2xl font-bold text-center mt-8 mb-6'>Tools & Deployment</h3>
        <div className='flex flex-wrap justify-center gap-4'>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaGithub size={25}/> GitHub</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiExpress size={25}/> Express</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiPostman size={25}/> Postman</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiNetlify size={25}/> Netlify</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><IoLogoVercel size={25}/> Vercel</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><GrHeroku size={25}/> Heroku</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><FaFigma size={25}/> Figma</Button>
            <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 flex items-center justify-center gap-2'><SiMiro size={25}/> Miro</Button>
        </div>
        </div>
        </>
    )
}

export default Skills 