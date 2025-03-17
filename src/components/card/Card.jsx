import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'


function Card({item}) {
  return (
    <div className='card'>
      <Link to={`/property/${item.id}`} className='imgcontainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className="textcontainer">
        <h2 className='title'>
          <Link to={`/property/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>
          ${item.price}
        </p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              {item.bedroom}
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              {item.bathroom}
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
