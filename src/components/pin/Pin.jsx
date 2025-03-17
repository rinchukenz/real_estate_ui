import React from 'react'
import './Pin.scss'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'

function Pin({item}) {
  return (
        <Marker position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="popup">

                <div className="imgcontainer">
                    <Link to={`/property/${item.id}`}>
                        <img src={item.img} alt="" />
                    </Link>
                </div>
                <div className="textcontainer">
                    <Link to={`/property/${item.id}`} className='title'>{item.title}</Link>
                    <span className='bed'>{item.bedroom} bedroom</span>
                    <b>$ {item.price}</b>
                </div>
            </div>
          </Popup>
        </Marker>
  )
}

export default Pin
