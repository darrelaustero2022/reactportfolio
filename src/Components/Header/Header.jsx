import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/homepic2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container" id='home'>
        <h5>Hello I'm</h5>
        <h1>Darrel Austero</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="video" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header