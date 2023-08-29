import React from 'react'
import {Link} from 'react-router-dom'
import './navbarnew.css'
import {ShoppingCart} from 'phosphor-react'
import logo from '../assets/xo.png'


export const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
      <div className='appLogo'>
        <Link to='/'><img src={logo} alt='' height='80px' width='100px' /></Link>
      </div>
        <Link to='/'>
            <div className='appTitle'>
                <h1>Go X Art</h1>
            </div>
        </Link>
        <div className='links'>
        <Link to="#" className='toggle-button'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/owned'>Owned</Link>
        <Link to='/saved'><ShoppingCart size={32}/></Link>
      </div>
    </div>
    <div className='bottomNavbar'>
        <Link to='/contactus'>Contact Us</Link>
    </div>
    </div>
  )
}


//import { Icon } from '@iconify/react';
//<Link to='/cart'><Icon icon="ph:shopping-cart" /></Link>