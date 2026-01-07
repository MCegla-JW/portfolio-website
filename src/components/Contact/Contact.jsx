import { MdOutlineEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router"

const Contact = () => {
    return (
        <>
        <div className='contact-buttons'>
        <Link className='email' to={'mailto:m.cegla93@gmail.com'}><MdOutlineEmail size={50}/></Link>
        <Link className='linkedin' to={'https://www.linkedin.com/in/magdalena-cegla-a4783596/'} target='_blank'><FaLinkedin size={50}/></Link>
        <Link className='github' to={'https://github.com/MCegla-JW'} target='_blank'><FaGithub size={50}/></Link>
        </div>
        </>
    )
}

export default Contact 