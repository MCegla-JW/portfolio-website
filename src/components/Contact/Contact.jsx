import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"
import { IoPerson } from "react-icons/io5";
import { Button } from '@headlessui/react'

const Contact = () => {
    return (
        <>
        <div className='contact-buttons flex flex-wrap gap-3 justify-center lg:justify-start'>
        <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"><Link className='email flex items-center justify-center gap-2' to={'mailto:m.cegla93@gmail.com'}><MdOutlineEmail size={30}/>Email</Link></Button>
        <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"><Link className='linkedin flex items-center justify-center gap-2' to={'https://www.linkedin.com/in/magdalena-cegla-a4783596/'} target='_blank'><FaLinkedin size={30}/>LinkedIn</Link></Button>
        <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"><Link className='github flex items-center justify-center gap-2' to={'https://github.com/MCegla-JW'} target='_blank'><FaGithub size={30}/>GitHub</Link></Button>
        <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500"><Link className='about-me flex items-center justify-center gap-2' to='/about'><IoPerson size={30}/>About Me</Link></Button>
        </div>
        </>
    )
}

export default Contact 