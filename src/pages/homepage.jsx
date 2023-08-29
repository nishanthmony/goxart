import React from 'react'
import './cart.css'
import {PRODUCTS} from '../products.js'
import {Cards} from './cards'


export const Homepage = () => {
  return (
    <div className='homePage'>
    <section>
      <div className='pics'>
      {
        PRODUCTS.map((item)=><Cards key={item.id} item = {item}/>)
      }
      </div>
    </section>
    </div>
  )
}
