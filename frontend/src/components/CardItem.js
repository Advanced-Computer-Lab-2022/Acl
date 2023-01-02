import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__pic-wrap' data-category={props.label}>
              <img src={props.src}
               alt="Course Image"
              className='cards__item__img'/>  
            </figure>
            <div className='cards__items__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>
        
      </li>
    </>
  )
}

export default CardItem
