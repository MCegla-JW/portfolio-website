import Magda from '../../assets/magda.png'
import Contact from '../Contact/Contact.jsx'

const ThankYou = () => {
    return (
        <div className='thank-you-container max-w-5xl mx-auto my-10 p-6 bg-base-200 rounded-lg shadow-lg'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
                {/* Profile Photo */}
                <div id='profile-photo' className='w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-gray-500'>
                <img src={Magda} alt='profile-photo' className='w-full h-full object-cover'/>
            </div>
            {/* Text and buttons */}
            <div className='flex flex-col justify-between flex-1 text-center md:text-left h-40'>
                <div>
                <h3 className='text-2xl font-bold mb-2'>Thank You!</h3>
                <p className='mb-4'>Thank you for checking out my profile. Get in touch using the links below!</p>
                </div>
                <Contact/>
                </div>
        </div>
        </div>
    )
}

export default ThankYou