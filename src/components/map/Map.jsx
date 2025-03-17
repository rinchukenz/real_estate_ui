import React from 'react'
import './Map.scss'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin'

function Map({items}) {
  return (
    

    <MapContainer center={[12.9716, 77.5946]} zoom={11} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        items.map((item)=>{
            return(

                <Pin item={item} key={item.id}/>
            )
        })
    }
    </MapContainer>
    
  )
}

export default Map
