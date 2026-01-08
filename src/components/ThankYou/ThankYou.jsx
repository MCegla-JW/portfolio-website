import Magda from '../../assets/magda.png'
import Contact from '../Contact/Contact.jsx'

const ThankYou = () => {
    return (
        <div className='thank-you-container'>
            <div className='profile-photo'>
                <img src={Magda} alt='profile-photo'/>
            </div>
            <div className='thank-you-text'>
                <h3>Thank You!</h3>
                <p>Thank you for checking out my profile. Get in touch using the links below!</p>
                <Contact/>
            </div>
        </div>
    )
}

export default ThankYou