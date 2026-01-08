import { Button } from '@headlessui/react'
import { Link } from 'react-router'

const NavBar = () => {
return (
<div className="drawer">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="mx-2 flex-1 px-2"></div>
      <div className="hidden flex-none lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><Link to='/about'>About</Link></Button></li>
          <li><Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#selected-projects'>Selected Projects</a></Button></li>
          <li><Button className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#key-skills'>Key Skills</a></Button></li>
          <li><Button  className="rounded bg-slate-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#previous-experience'>Previous Experience</a></Button></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4 items-center pt-60">
      {/* Sidebar content here */}
        <li><Button className="rounded bg-slate-600 px-4 py-2 text-2xl text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><Link to='/about'>About</Link></Button></li>
        <li><Button className="rounded bg-slate-600 px-4 py-2 text-2xl text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#selected-projects'>Selected Projects</a></Button></li>
        <li><Button className="rounded bg-slate-600 px-4 py-2 text-2xl text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#key-skills'>Key Skills</a></Button></li>
        <li><Button Button className="rounded bg-slate-600 px-4 py-2 text-2xl text-white data-active:bg-sky-700 data-hover:bg-sky-500 m-2"><a href='#previous-experience'>Previous Experience</a></Button></li>
    </ul>
  </div>
</div>
)
}

export default NavBar