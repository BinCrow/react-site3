import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <header id="header">
            <div className="header__port">
                <Link to="/portfolio">portfoilo</Link>
            </div>
            <div className="header__logo">
                <Link to="/">Bin's</Link>
            </div>
            <nav className="header__menu">
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/reference">Refer</Link>
                    </li>
                    <li>
                        <Link to="/youtube">Youtube</Link>
                    </li>
                    <li>
                        <Link to="/movie">Movie</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header