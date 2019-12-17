import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav/nav.css'

export default () => {
  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div>
        </div>
        <NavLink  to="/">
          <img className="toolbar__logo" src="img/ojo.png" alt="" aria-hidden="true" />
        </NavLink>
        <div className="toolbar__nav-items">
          <ul>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/proyects">Proyects</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  )
}