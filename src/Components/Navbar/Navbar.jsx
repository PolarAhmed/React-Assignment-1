import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return <>
  
  <div>
  <nav className='navbar navbar-expand-lg fixed p-4'>
    <div className='container'>
        <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2 ms-1" to="/">Start Framework</Link>
        <div className='navbar-collapse collapse'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item me-3'><NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="about">About</NavLink></li>
                <li className='nav-item me-3'><NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="portfolio">Portfolio</NavLink></li>
                <li className='nav-item me-3'><NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to="contact">Contact</NavLink></li>
            </ul>
        </div>
    </div>
  </nav>
  </div>

  </>
}

