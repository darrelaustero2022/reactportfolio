import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Ux/Ui Design</h3>

          </div>
          
          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Provide modern design to your website according to your brand</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>SEO - your website will be optimized to appear on search engines</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Mobile responsive Designs that will look amazing on any devices</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>User friendly Designs that your visitors will surely love</p>
            </li>
            
          </ul>
        </article>
      
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
            
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Setup hosting and domain name of your website includes email</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Create E commerce shop and setup payment portals</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Provide other functionalities such as events and bookings</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Integrate marketing functions to website to convert more sales</p>
            </li>
          </ul>
        </article>
       
        <article className="service">
          <div className="service__head">
            <h3>Website Maintenance</h3>
            
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Modify Design - changes to make website look better</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Upgrade - add features in the website e.g. booking</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Debug Errors- fix bugs or error that you are encountering</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Optimized Website- modify code structure for faster loading of website</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services