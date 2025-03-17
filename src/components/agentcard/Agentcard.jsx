import React from 'react'
import './Agentcard.scss'


function Agentcard({item}) {

  

  return (
    <div className='agentcard'>
      <div className="top">
        <div className="img-side">
            <img src={item.image} alt="" />
            <span>View Profile</span>
        </div>
        <div className="detail-side">
            <div className="name-side">
                <div className="credits">
                    <div className="pro">
                      <img src="/star-inside-circle.png" alt="" />
                      <span>Pro Agent</span>
                    </div>
                    <div className="trusted">
                      <img src="/check.png" alt="" />
                      <span>Trusted Partner</span>
                    </div>
                </div>
                <h5>{item.name}</h5>
                <h6>{item.company}</h6>
            </div>
            <div className="exp-side">
                <div className="exp">
                    <div className="ex">
                      <img src="/portfolio.png" alt="" />
                      <p>10 Years of Experience</p>
                    </div>
                    <div className="lang">
                      <img src="/language.png" alt="" />
                      <p>English,Hindii,Kannada,Tamil</p>
                    </div>
                </div>
                <div className="listings">
                    <img src="/list.png" alt="" />
                    <p>25 Listings</p>
                </div>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="whatsapp">
            <img src="/whatsapp.png" alt="" />
            <span>WhatsApp</span>
        </div>
        <p>Book an Appointment</p>
      </div>
    </div>
  )
}

export default Agentcard
