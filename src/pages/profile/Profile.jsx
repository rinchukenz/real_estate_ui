import React from 'react'
import './Profile.scss'
import Mylist from '../../components/mylist/Mylist'
import Chat from '../../components/chat/Chat'

function Profile() {
  return (
    <div className='profile'>
      <div className="profilecontainer">
        <div className="wrapper">
            <div className="userinformation">
                <h1>User Information</h1>
                <h3>Update Profile</h3>
            </div>
            <div className="user-details">
                <div className="avatar">
                    <pre>Profile Picture :  </pre>
                    <img src="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="username">
                    <pre>Username :  </pre>
                    <span>Rinchu</span>
                </div>
                <div className="email">
                    <pre>Email :  </pre>
                    <span>rinchu@gmail.com</span>
                </div>
            </div>
            <div className="mylist-heading">
                <h1>My List</h1>
                <h3>Create New Post</h3>
            </div>
            <div className="list">
              <Mylist/>
            </div>
        </div>
      </div>
      <div className="chatcontainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default Profile
