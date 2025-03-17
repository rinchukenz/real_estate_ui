import React from 'react'
import './Agent.scss'
import Agentcard from '../../components/agentcard/Agentcard'
import { agentData } from '../../lib/dummydata'

function Agent() {
  return (
    <div className='agent'>
      <div className="agents-list-container">
        <div className="wrapper">
            <h1>Real Estate Agents in <b>Banglore</b></h1>
            {
              agentData.map((item) =>{
                return(
                  <Agentcard key={item.id} item={item}/>
                )
              })
            }
        </div>
      </div>
      <div className="agents-rank-container">
        <div className="quote">
        <p>"Real estate is a long-term game. Don't try to get rich quick.
              Instead, focus on buying properties that will 
              generate income and appreciate over time."
        </p>
        <div className="author"><span> - Warren Buffett</span></div>
        </div>
        <div className="quote own">
        <p>
          “Don’t wait to buy real estate. Buy real estate and wait.”
        </p>
        <div className="author"><span> - Will Rogers</span></div>
        </div>
        <div className="quote">
        <p>
          "A house is made of bricks and beams. A home is made of hopes and dreams."
        </p>
        <div className="author"><span> - Ralph Waldo Emerson</span></div>
        </div>
        <div className="quote own">
        <p>
        “If you don’t own a home, buy one. If you own a home, buy another one. If you own two homes buy a third. And lend your relatives the money to buy a home.” 
        </p>
        <div className="author"><span> - John Paulson</span></div>
        </div>
      </div>
    </div>
  )
}

export default Agent
