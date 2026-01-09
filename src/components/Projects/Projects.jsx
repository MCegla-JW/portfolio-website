import MovieNight from "../../assets/discover-cards.png";
import TravelAgent from "../../assets/main-page.png";
import DogSpotting from "../../assets/main-menu.jpg";
import PacDog from "../../assets/Main-Game-Screen.png";
import { FaGithub } from "react-icons/fa";
import { Button } from "@headlessui/react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiDjango, SiOpenai } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiHeadlessui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import PhoneMockup from "../PhoneMockup/PhoneMockup";

const Projects = () => {
  return (
    <>
      <div className="projects">
        {/* PROJECT 1 */}
        <div className="max-w-6xl mx-auto my-12 p-6 bg-neutral-600 rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
            {/* Phone */}
            <figure className="flex justify-center items-center lg:w-1/3 shrink-0">
            <PhoneMockup imageSrc={MovieNight} link="https://movienight-app-project.netlify.app/movies" objectFit="cover"/>
            </figure>
            {/* Content */}
            <div className="card-content lg:w-4/5 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <a
                  href="https://movienight-app-project.netlify.app/movies"
                  className="group relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MovieNight
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-300"></span>
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
                </a>
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Full-stack movie discovery and watch party app | Solo project |
                9 days
              </h4>
              <p className="text-l mb-4">
                Built with React, Django, PostgreSQL, Tailwind CSS, DaisyUI,
                Headless UI, and JWT authentication. Implemented CRUD
                functionality, TMDB API integration, user authentication,
                protected routes, and reusable React components; planned and
                prototyped the UI using Miro and managed tasks via Trello.
              </p>
              <p className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                Tech Stack: <FaReact size={25} title="React" />{" "}
                <SiDjango size={25} title="Django" />{" "}
                <DiPostgresql size={25} title="PostgreSQL" />{" "}
                <RiTailwindCssFill size={25} title="TailwindCSS" />{" "}
                <SiDaisyui size={25} title="DaisyUI" />{" "}
                <SiHeadlessui size={25} title="HeadlessUI" />
              </p>
              <div className="contact-buttons flex flex-wrap gap-3 text-xl font-bold justify-center lg:justify-start">
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 ">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/movie-night-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe Frontend
                  </a>
                </Button>
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/movie-night-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe Backend
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="max-w-6xl mx-auto my-12 p-6 bg-neutral-600 rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-center lg:gap-14">
            {/* Content */}
            <div className="card-content lg:w-4/5 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <a
                  href="https://travel-agent-ten-nu.vercel.app/"
                  className="group relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Agent
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-300"></span>
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
                </a>
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Full-stack trip planning app with AI-powered activity
                recommendations | Paired project | 7 days
              </h4>
              <p className="text-l mb-4">
                Built with React, Express (Node.js), MongoDB, Mongoose, Material
                UI, JWT authentication, and integrated OpenAI API for
                personalized activity suggestions. Implemented CRUD
                functionality, user authentication, protected routes, responsive
                UI components, and collaborated effectively using GitHub,
                feature branches, Trello, and Miro.
              </p>
              <p className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                Tech Stack: <FaReact size={25} title="React" />{" "}
                <SiExpress size={25} title="Express" />{" "}
                <SiNodedotjs size={25} title="Node.js" />{" "}
                <SiMongodb size={25} title="MongoDB" />{" "}
                <SiMongoose size={25} title="Mongoose" />{" "}
                <SiOpenai size={25} title="OpenAI" />
              </p>
              <div className="contact-buttons flex flex-wrap gap-3 text-xl font-bold justify-center lg:justify-start">
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 ">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/travel-agent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe Frontend
                  </a>
                </Button>
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/travel-agent-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe Backend
                  </a>
                </Button>
              </div>
            </div>
            {/* Phone */}
            <figure className="flex justify-center items-center lg:w-1/5 m-4">
              <PhoneMockup imageSrc={TravelAgent} link="https://travel-agent-ten-nu.vercel.app/"/>
            </figure>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="max-w-6xl mx-auto my-12 p-6 bg-neutral-600 rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-center lg:gap-14">
            {/* Phone */}
            <figure className="flex justify-center items-center lg:w-1/5 m-4">
              <PhoneMockup imageSrc={DogSpotting} link="https://dogspotting.netlify.app/" objectFit="contain" objectPosition="center"/>
            </figure>
            {/* Content */}
            <div className="card-content lg:w-4/5 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <a
                  href="https://dogspotting.netlify.app/"
                  className="group relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DogSpotting
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-300"></span>
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
                </a>
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Full-stack MEN CRUD app for sharing, liking, and rating dog
                sightings | Solo proect | 7 days
              </h4>
              <p className="text-l mb-4">
                Built with Express (Node.js), MongoDB, Mongoose, EJS, CSS3, and
                Cloudinary. Implemented session-based authentication, CRUD
                operations, photo uploads, like/rating system, protected routes,
                and a responsive mobile-first UI; planned UI with Figma,
                wireframes in Miro, and managed tasks via Trello.
              </p>
              <p className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                Tech Stack: <SiNodedotjs size={25} title="Node.js" />{" "}
                <SiExpress size={25} title="Express" />{" "}
                <SiMongodb size={25} title="MongoDB" />{" "}
                <SiMongoose size={25} title="Mongoose" />{" "}
                <FaCss3Alt size={25} title="CSS" />{" "}
                <SiCloudinary size={25} title="Cloudinary" />
              </p>
              <div className="contact-buttons flex flex-wrap gap-3 text-xl font-bold justify-center lg:justify-start">
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 ">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/MEN-Stack-CRUD-App---DogSpotting---Project-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="max-w-6xl mx-auto my-12 p-6 bg-neutral-600 rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
            {/* Content */}
            <div className="card-content lg:w-4/5 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                <a
                  href="https://mcegla-jw.github.io/PacMan-game-GA-project-1/"
                  className="group relative inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PacDog
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gray-300"></span>
                  <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
                </a>
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                Browser-based grid game inspired by PacMan | Solo project | 7
                days
              </h4>
              <p className="text-l mb-4">
                Built with JavaScript, HTML5, and CSS3. Developed player
                movement, collision detection, enemy AI with BFS pathfinding,
                scoring system, win/lose logic, and responsive game board.
                Planned and prototyped the project using flowcharts, pseudocode,
                and grid diagrams, and deployed online via GitHub Pages.
              </p>
              <p className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                Tech Stack: <IoLogoJavascript size={25} title="JavaScript" />{" "}
                <FaHtml5 size={25} title="HTML5" />{" "}
                <FaCss3Alt size={25} title="CSS" />
              </p>
              <div className="contact-buttons flex flex-wrap gap-3 text-xl font-bold justify-center lg:justify-start">
                <Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 ">
                  <a
                    className="flex items-center gap-2"
                    href="https://github.com/MCegla-JW/PacMan-game-GA-project-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    ReadMe Frontend
                  </a>
                </Button>
              </div>
            </div>
            {/* Browser */}
            <figure className="flex justify-center items-center lg:w-3/6 w-full">
              <div className="mockup-window bg-base-100 border border-base-300 w-full max-w-xl">
                <div className="w-full bg-neutral-900 overflow-hidden h-48 sm:h-56 md:h-64 lg:h-80">
                  <a
                    href="https://mcegla-jw.github.io/PacMan-game-GA-project-1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='block w-full h-full'
                  >
                    <img
                      src={PacDog}
                      className="project-img w-full h-full object-contain"
                      alt=" Pacdog game screenshot"
                    />
                  </a>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
