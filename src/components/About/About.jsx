import { MdAirplaneTicket } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import ThankYou from "../ThankYou/ThankYou";
import { Link } from 'react-router'

const About = () => {
    return (
        <>
        <button><Link to='/'>Back to home</Link></button>
        <h1>Magda Cegla</h1>
        <h3>I’m a junior software engineer with a background in project and event management, bringing strong problem-solving, organisation, and delivery skills into software development. My journey into coding began with Codecademy, where I learned the fundamentals of JavaScript, HTML, CSS, and Python and built my first website.
        Enjoying the challenge of building and improving systems, I transitioned into software engineering to develop future-focused technical skills. I completed the Software Engineering Bootcamp at General Assembly, where I gained hands-on experience building full-stack applications and working with modern frameworks, APIs, and collaborative development workflows.</h3>
        <div className='interests'>
            <h2>Interests</h2>
            <p>What do I like to do outside of work?</p>
            <div className='travel'>
                <h3><MdAirplaneTicket/>Travelling</h3>
                <p>I love travelling and discovering new places, especially through food. I enjoy planning trips by creating spreadsheets that map out key attractions and the best places to eat. I’m excited to apply my new tech skills to build some fun personal projects I already have in mind. My most recent trip was to Seoul, Sout Korea and I am already planning my next adventure.</p>
            </div>
            <div className='music'>
                <h3><FaMusic/>Music & Musiclas</h3>
                <p>I love listening to music—it fills every part of my day. My passion for music originally drew me to event management, as I wanted to work in music venues and manage tours. I enjoy concerts, music festivals, and musicals; I recently flew to New York for a weekend just to go to a few Broadway shows. My current favorite is Hadestown, and I’m fascinated by the artistry and organization that goes into live musical theatre performances. I’m always excited to connect with others who share my love for musical theatre.</p>
            </div>
        </div>
        <ThankYou/>
        </>
    )
}

export default About