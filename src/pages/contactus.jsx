import React from 'react'
import './cart.css'
import insta from '../assets/instalogo.png'
import gokul from '../assets/gokul.png'

export const Contactus = () => {
  return (
    <div className='contactDetails'>
        <div className='ownerDetails'>
            <p><h2>This Page is owned by </h2><p><h1><b className='ownerNumber'><u>N. Gokulapriyan</u></b></h1></p></p>
        </div>
        <div>
          <h1><p>To Contact "<b className='ownerNumber'>9789240967</b>"</p></h1>
          <h2><p>Contact me for your Personalised Collabs</p></h2>
        </div>
        <div className='profileLinks'>
          <h1><a href='https://www.instagram.com/_goxart_/?hl=en'><img src={insta} alt='' height='80px' width='80px' /></a>
          <p></p>
          <a href='https://www.instagram.com/_gokul10_/'><img className='gokul' src={gokul} alt='' height='80px' width='80px'/></a></h1>
        </div>
    </div>
  )
}
