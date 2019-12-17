import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/home.css';

export default () => {
  return (
    <div className="wapper__home">
      <header>
        <NavLink className="wapper__logo" to="/">
          <img className="logo" src="img/ojo.png" alt="" aria-hidden="true" />
        </NavLink>
      </header>
      <h1 className="home__title">Gloriana Angulo Alvarado</h1>
      <h2 className="home__subtittle">Front-End Developer</h2>
      <img className="corazon" src="img/corazon.gif" alt="" aria-hidden="true"/>
      <nav>
      <NavLink className="home__link" to="/about">About Me</NavLink>
      <NavLink className="home__link" to="/about">Proyects</NavLink>
      </nav>
    </div>

  )
}