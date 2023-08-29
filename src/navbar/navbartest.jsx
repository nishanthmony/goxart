import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {ShoppingCart} from 'phosphor-react'
import logo from '../assets/xo.png'


export const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
      <div className='appLogo'>
        <img src={logo} alt='' height='80px' width='100px' />
      </div>
      <div className='links'>
        <Link to='/'>
            <div className='appTitle'>
                <h1>Go X Art</h1>
            </div>
        </Link>
        <a href='#' className='toggle-button'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </a>
        <div className='categories'>
          <Link to='/categories'>Categories</Link>
        </div>
        <div className='dropDown'>
            <Link to='/wallpapers'>Wallpapers</Link>
            <Link to='/weeknd'>Weeknd</Link>
            <Link to='/belly'>Belly</Link>
        </div>
        
        <Link to='/owned'>Owned</Link>
        <Link to='/cart'><ShoppingCart size = {32}/></Link>
      </div>
    </div>
    <div className='bottomNavbar'>
        <Link to='/contactus'>Contact Us</Link>
    </div>
    </div>
  )
}