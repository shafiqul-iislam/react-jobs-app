import React from 'react';
import Logo from '../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

    const LinkClass = ({isActive}) => isActive ? "text-white bg-indigo-700 hover:bg-indigo-700 px-2 py-1 rounded" : "text-white hover:bg-indigo-700 px-2 py-1 rounded";


    return (
        <nav className="bg-indigo-500 shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src={Logo}
                        className="h-10 w-auto"
                    />
                    <span className="text-2xl font-bold text-white">React Jobs</span>
                </Link>
                {/* <!-- Desktop Menu --> */}
                <ul className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
                    <li className="mr-2"><NavLink to="/" className={LinkClass}>Home</NavLink></li>
                    <li className="mr-2"><NavLink to="/jobs" className={LinkClass}>Jobs</NavLink></li>
                    <li className="mr-2"><NavLink to="add-job" className={LinkClass}>Add Job</NavLink></li>
                </ul>
                {/* <!-- Hamburger --> */}
                {/* <button id="menu-btn" className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button> */}
            </div>

            {/* <!-- Mobile Menu --> */}
            {/* <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 bg-white shadow-md">
                <ul class="space-y-3 text-gray-700 text-sm font-medium">
                    <li className="mr-2"><NavLink to="/" className="text-white hover:bg-indigo-700 px-2 py-1 rounded">Home</NavLink></li>
                    <li className="mr-2"><NavLink to="/jobs" className="text-white hover:bg-indigo-700 px-2 py-1 rounded">Jobs</NavLink></li>
                    <li className="mr-2"><NavLink to="add-job" className="text-white hover:bg-indigo-700 px-2 py-1 rounded">Add Job</NavLink></li>
                </ul>
            </div> */}
        </nav>
    )
}

export default Navbar
