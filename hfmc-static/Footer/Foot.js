import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';

const Foot = () => {
  return (
    <>

           <div className='footer_row'>
               <div className='col'>
                   <h3>Healthfirst Medicorp</h3>
                   <p>Healthfirst Medicorp</p>
               </div>
               <div className='col'>
                   <h3> Office </h3>
                   <p> Gurudev Appartment, </p> 
                   <p> Behind Ishwar Petrol Pump, Lullanagar </p> 
                   <p> Pune, Maharashtra, 411048 </p>
                   <p className='email-id'>healthfirstmedicorp@gmail.com</p>
                   <h4>+91 80486 09744</h4>
               </div>
               <div className='col'>
                   <h3> Links </h3>
                   <ul>
                    <li> <a href=''> Home </a> </li>
                    <li> <a href=''> About Us </a> </li>
                    <li> <a href=''> Our Clients </a> </li>
                    <li> <a href=''> Contact Us </a> </li>
                   </ul>
               </div>
               <div className='col'>
                   <h3> Newsletter <div className='underline'> <span></span></div></h3>
                   <form>
                    <FontAwesomeIcon className='envelope' icon={faEnvelope} />
                    <FontAwesomeIcon icon="fa-light fa-envelope" />
                       <input type='email' placeholder='Subscribe us..' required/>
                       <button type='submit'><FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
                   </form>
                   <div className='social-media'>
                   <FontAwesomeIcon icon={faFacebook } size='3x' className='icon'/>
                   <FontAwesomeIcon icon={faInstagram } size='3x' className='icon'/>
                   <FontAwesomeIcon icon={faTwitter } size='3x' className='icon'/>
                       
                   </div>
               </div>
           </div>
           <hr></hr>
           <p className='copyright'> Healthfirst Medicorp © 2022  All rights reserved.</p>
    </>
  )
}

export default Foot