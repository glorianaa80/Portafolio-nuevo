import React from 'react';
import './footer.css'

function Footer() {
  return(
    <div className="wapper__footer">
      <p className="footer__text">
      Graduate of Web Design and Development of the Center of Technologies and Visual Arts (CETAV) Parque la Liberdad
      </p>
      <a className="footer__link" href="https://github.com/glorianaa80"><img className="footer__img" src="/img/github.svg" aria-hidden="true" alt=""/>GitHub</a>
    </div>
  )
}

export default Footer;