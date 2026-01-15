import { MdAirplaneTicket } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';
import ThankYou from '../ThankYou/ThankYou';
import { Link } from 'react-router'
import { Button } from '@headlessui/react'

const About = () => {
    return (
        <>
<div className='flex flex-col items-center text-center p-6 md:p-12'>

  {/* Back Button */}
  <Button className='rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 mb-6'>
    <Link to='/'>Back to home</Link>
  </Button>

  {/* Name */}
  <div className='mb-6 w-full max-w-3xl text-left'>
    <h1 className='font-bold text-4xl md:text-5xl'>Magda</h1>
    <h1 className='font-bold text-4xl md:text-5xl'>Cegla</h1>
  </div>

  {/* Bio */}
  <p className='max-w-3xl text-left md:text-left mb-8'>
    I’m a junior software engineer with a background in project and event management, bringing strong problem-solving, organisation, and delivery skills into software development. My journey into coding began with Codecademy, where I learned the fundamentals of JavaScript, HTML, CSS, and Python and built my first website.
    Enjoying the challenge of building and improving systems, I transitioned into software engineering to develop future-focused technical skills. I completed the Software Engineering Bootcamp at General Assembly, where I gained hands-on experience building full-stack applications and working with modern frameworks, APIs, and collaborative development workflows.
  </p>

  {/* Interests Section */}
  <div className='w-full max-w-3xl text-left'>

    <h2 className='font-bold text-2xl mb-3'>Interests</h2>
    <p className='mb-6'>What do I like to do outside of work?</p>

    {/* Travelling */}
    <div className='mb-6'>
      <h3 className='flex items-center gap-2 font-bold text-xl mb-2'>
        <MdAirplaneTicket size={35} />
        Travelling
      </h3>
      <p>
        I love travelling and discovering new places, especially through food. I enjoy planning trips by creating spreadsheets that map out key attractions and the best places to eat. I’m excited to apply my new tech skills to build some fun personal projects I already have in mind. My most recent trip was to Seoul, South Korea and I am already planning my next adventure.
      </p>
    </div>

    {/* Music & Musicals */}
    <div>
      <h3 className='flex items-center gap-2 font-bold text-xl mb-2'>
        <FaMusic size={35} />
        Music & Musicals
      </h3>
      <p>
        I love listening to music—it fills every part of my day. My passion for music originally drew me to event management, as I wanted to work in music venues and manage tours. I enjoy concerts, music festivals, and musicals; I recently flew to New York for a weekend just to go to a few Broadway shows. My current favourite is Hadestown, and I’m fascinated by the artistry and organization that goes into live musical theatre performances. I’m always excited to connect with others who share my love for musical theatre.
      </p>
    </div>

  </div>
</div>
        <ThankYou/>
        </>
    )
}

export default About