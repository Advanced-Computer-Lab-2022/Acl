import React from 'react'
import CardItem from './CardItem.js'
import './Cards.css'


function Cards() {
  return (
    <div  className='cards'>
        <h1> Check out our latest courses</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-2.jpg'
                    text='Get the chance to learn new skills'
                    label='Newest'
                    path='/viewcourses'/>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
