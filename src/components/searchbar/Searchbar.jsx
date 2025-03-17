import React, { useState } from 'react'
import './Searchbar.scss'
import { Link } from 'react-router-dom';

//const types = ["buy", "rent"];

function Searchbar() {

  const [type,setType] = useState(true);

  return (
    <div className='searchbar'>
      <div className="types">
        <button onClick={() =>setType(true)} className={type ? "active" : ""}>Buy</button>
        <button onClick={() =>setType(false)}className={type ? "" : "active"}>Rent</button>
        {console.log(type)}
      </div>
      <form>
        <input type="text" name='location' placeholder='City Location' />
        <input type='number' name='minprice' placeholder='Min Price'/>
        <input type='number' name='maxprice' placeholder='Max Price'/>
        <Link to="/list">
        <button className='button'>
          <img src="/search.png" alt="" />
        </button>
        </Link>
      </form>
    </div>
  )
}

export default Searchbar
