import React from 'react'
import './Homepage.scss'
import Searchbar from '../../components/searchbar/Searchbar'

function Homepage() {
  return (
    <div className='homepage'>
        <div className="text-container">
            <div className="wrapper">
                <h1 className='title'>Buying & Selling has never been so simple</h1>
                <p>
                    Destination for finding the perfect home or investment property. 
                    Whether you're buying, selling, or renting,
                    we provide a seamless and intuitive experience 
                    to help you make informed real estate decisions.
                </p>
                <Searchbar/>
                <div className="awards">
                  <div className="boxes">
                    <h1>16+</h1>
                    <span>Years of Experience</span>
                  </div>
                  <div className="boxes">
                    <h1>200</h1>
                    <span>Awards Gained</span>
                  </div>
                  <div className="boxes">
                    <h1>1200+</h1>
                    <span>Properties</span>
                  </div>
                </div>
                
            </div>
        </div>
        <div className="img-container">
            <img src="https://images.pexels.com/photos/1272541/pexels-photo-1272541.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="inside-img">
                <img src="https://images.pexels.com/photos/2441844/pexels-photo-2441844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              </div>
        </div>
        
    </div>
  )
}

export default Homepage
