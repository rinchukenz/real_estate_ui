import React from 'react'
import './Filter.scss'
import { Link } from 'react-router-dom'


function Filter() {
  return (
    <div className='filter'>
      <h1>Search results for <b>Banglore</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name='type' id='type'>
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item ppt">
          <label htmlFor="property">Property</label>
          <select name='property' id='property'>
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="Flat">Flat</option>
            <option value="Land">Land</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minprice">Min-Price</label>
          <input type="number" id='minprice' name='minprice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="maxprice">Max-Price</label>
          <input type="number" id='maxprice' name='maxprice' placeholder='any' />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedrooms</label>
          <input type="number" id='bedroom' name='bedroom' placeholder='any' />
        </div>
        
        <div className="search">
          
            <img src="/search.png" alt="" />
          
        </div>
        

      </div>
      
    </div>
  )
}

export default Filter
