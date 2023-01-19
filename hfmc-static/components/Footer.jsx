import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2022 Healthfirst Medicorp. All Rights Reserved</p>
        <p className='icons'>
            <AiFillInstagram />
            <AiOutlineTwitter />
        </p>
    </div>

  )
}

export default Footer