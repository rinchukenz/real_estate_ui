import React, { useState } from 'react'
import './Chat.scss'

export default function Chat() {

    const [chat, setChat] = useState(true);

  return (
    <div className='chat'>

      <div className="messeges">

        <h1>Messages</h1>
        
        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>

        <div className="message" onClick={() =>setChat(true)}>
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span>Bill Gates</span>
            <p>Hi, how are you...</p>
        </div>
        
      </div>
      
      
      {chat && <div className="chatbox">
        <div className="top">
            <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <span className='name'>Bill Gates</span>
            <span className='close' onClick={() =>setChat(false)}>X</span>
        </div>
        <div className="center">
            <div className="chatmsg">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg own">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg own">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg own">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
            <div className="chatmsg">
                <p>Can you share more details?</p>
                <span>1 hour ago</span>
            </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
        </div>
      </div>}
    </div>
  )
}
