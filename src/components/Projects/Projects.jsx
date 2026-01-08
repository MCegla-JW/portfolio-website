import MovieNight from '../../assets/discover-cards.png'
import TravelAgent from '../../assets/main-page.png'
import DogSpotting from '../../assets/main-menu.jpg'
import PacDog from '../../assets/Main-Game-Screen.png'
import { FaGithub } from "react-icons/fa";


const Projects = () => {
    return (
        <>
        <div className='projects'>
        {/* PROJECT 1 */}
        <div className="phone">
        <img src={MovieNight} className="project-img"/>
        <a href='https://movienight-app-project.netlify.app/movies' target='_blank' rel='noopener noreferrer'></a>
        </div>
        <h3><a href='https://movienight-app-project.netlify.app/movies' target='_blank' rel='noopener noreferrer'>MovieNight</a></h3>
        <h4>Full-stack movie discovery and watch party app | Solo project | 9 days</h4>
        <p className='card-text'>
        Built with React, Django, PostgreSQL, Tailwind CSS, DaisyUI, Headless UI, and JWT authentication. Implemented CRUD functionality, TMDB API integration, user authentication, protected routes, and reusable React components; planned and prototyped the UI using Miro and managed tasks via Trello.
        </p>
        <p>Tech Stack: React, Django, PostgreSQL, Tailwind CSS, DaisyUI, Headless UI, JWT</p>
        <button><a href='https://github.com/MCegla-JW/movie-night-frontendGitHub' target='_blank' rel='noopener noreferrer'><FaGithub />ReadMe Frontend</a></button>
        <button><a href='https://github.com/MCegla-JW/movie-night-backend' target='_blank' rel='noopener noreferrer'><FaGithub />ReadMe Backend</a></button>
        {/* PROJECT 2 */}
        <div className="phone">
          <a href='https://travel-agent-ten-nu.vercel.app/' target='_blank' rel='noopener noreferrer'><img src={TravelAgent} className="project-img"/></a>
        </div>
        <h3><a href='https://travel-agent-ten-nu.vercel.app/' target='_blank' rel='noopener noreferrer'>Travel Agent</a></h3>
        <h4>Full-stack trip planning app with AI-powered activity recommendations | Paired project | 7 days</h4>
        <p className='card-text'>
        Built with React, Node.js, Express, MongoDB, Material UI, JWT authentication, and integrated OpenAI API for personalized activity suggestions. Implemented CRUD functionality, user authentication, protected routes, responsive UI components, and collaborated effectively using GitHub, feature branches, Trello, and Miro.
        </p>
        <p>Tech Stack: React, Django, PostgreSQL, Tailwind CSS, DaisyUI, Headless UI, JWT</p>
        <button><a href='https://github.com/MCegla-JW/travel-agent-api' target='_blank' rel='noopener noreferrer'><FaGithub/>GitHub Backend</a></button>
        <button><a href='https://github.com/MCegla-JW/travel-agent' target='_blank' rel='noopener noreferrer'><FaGithub/>GitHub Frontend</a></button>
        {/* PROJECT 3 */}
        <div className="phone">
          <a href='https://dogspotting.netlify.app/' target='_blank' rel='noopener noreferrer'><img src={DogSpotting} className="project-img"/></a>
        </div>
        <h3><a href='https://dogspotting.netlify.app/' target='_blank' rel='noopener noreferrer'>DogSpotting</a></h3>
        <h4>Full-stack MEN CRUD app for sharing, liking, and rating dog sightings | Solo proect | 7 days</h4>
        <p className='card-text'>
        Built with Node.js, Express, MongoDB, Mongoose, EJS, CSS3, and Cloudinary. Implemented session-based authentication, CRUD operations, photo uploads, like/rating system, protected routes, and a responsive mobile-first UI; planned UI with Figma, wireframes in Miro, and managed tasks via Trello.        </p>
        <p>Tech Stack: Node.js, Next,js, Express, MongoDB Atlas, Mongoose, EJS, CSS3, Cloudinary</p>
        <button><a href='https://github.com/MCegla-JW/MEN-Stack-CRUD-App---DogSpotting---Project-2' target='_blank' rel='noopener noreferrer'><FaGithub/>GitHub</a></button>
         {/* PROJECT 4 */}
        <div className="phone">
          <a href='https://mcegla-jw.github.io/PacMan-game-GA-project-1/' target='_blank' rel='noopener noreferrer'><img src={PacDog} className="project-img"/></a>
        </div>
        <h3><a href='https://mcegla-jw.github.io/PacMan-game-GA-project-1/' target='_blank' rel='noopener noreferrer'>PacDog</a></h3>
        <h4>Browser-based grid game inspired by PacMan | Solo project | 7 days</h4>
        <p className='card-text'>
        Built with JavaScript, HTML5, and CSS3. Developed player movement, collision detection, enemy AI with BFS pathfinding, scoring system, win/lose logic, and responsive game board. Planned and prototyped the project using flowcharts, pseudocode, and grid diagrams, and deployed online via GitHub Pages.        </p>
        <p>Tech Stack: JavaScript, HTML5, CSS3</p>
        <button><a href='https://github.com/MCegla-JW/PacMan-game-GA-project-1' target='_blank' rel='noopener noreferrer'><FaGithub/>GitHub</a></button>
        </div>
        </>
    )
}

export default Projects