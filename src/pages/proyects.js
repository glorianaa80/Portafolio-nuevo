import React from 'react';
import Nav from '../components/Nav/nav'
import Footer from '../components/footer/footer'
import '../css/proyects.css';

export default () => {
  return (
    <div>
      <Nav/>
      <div className="wapper__proyects">
        <h1 className="proyects__title">Proyects</h1>

        <div className="wapper__proyect">
          <h2 className="proyect__title">Little Mix</h2>
          <div className="wapper__img--color">
            <img className="proyect__img" src="/img/LittleMix.jpg" alt="Poster Musical de Little Mix"/>
          </div>
        </div>

        <div className="wapper__proyect--pstn">
          <h2 className="proyect__title">Made in Organic.</h2>
          <div className="wapper__img">
            <img className="proyect__img" src="/img/MadeinOrganic.jpg" alt="Poster Musical de Little Mix"/>
          </div>
        </div>

        <div className="wapper__proyect-pstn">
          <h2 className="proyect__title">Organic</h2>
          <div className="wapper__img--color">
            <img className="proyect__img" src="/img/Organic.jpg" alt="Poster Musical de Little Mix"/>
          </div>
        </div>

        <div className="wapper__proyect--pstn">
          <h2 className="proyect__title">Proxy</h2>
          <div className="wapper__img">
            <img className="proyect__img" src="/img/Proxy.jpg" alt="Poster Musical de Little Mix"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}