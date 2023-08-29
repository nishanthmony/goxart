import React from 'react'
import './categories/cards1.css'
//import './cards.css'

export const Cards = ({item}) => {
    // eslint-disable-next-line
    const {id, prodName, prodImg} = item;
  return (
    //div.cards>div.image_box+div.details>p*3+button
    <div className='cards'>
      <div className='container'>
        <img src={prodImg} alt='Go X Art' style={{width:'100%'}}/>
      </div>
    </div>
  )
}

/*
<div className='prodDescription'>
            <button className='saveButton'>Save</button>
        </div>

button{
  border-radius: 6px;
  color: red;
  font-size: 26px;
  background-color: black;
}
button:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.saveButton{
  white-space: nowrap; 
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}*/