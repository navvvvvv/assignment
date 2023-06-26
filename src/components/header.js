import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto my-1">
            <li className="nav-item active">
            <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item active ">
            <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/information"> Information</Link>
            </li>
            <li className="nav-item active">
            <Link className="nav-link" to="/guide"> Guide</Link>
            </li>
            </ul>
        </div>
    </nav>
</div>
  )
}
