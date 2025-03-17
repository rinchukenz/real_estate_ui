import React, { useEffect, useState } from 'react'
import './Singlepage.scss'
import { listData } from '../../lib/dummydata'
import {  singlePostData, userData } from '../../lib/dummydata'
import Slider from '../../components/slider/Slider'
import Smap from '../../components/smallmap/Smap'
import { useParams } from 'react-router-dom'



function Singlepage() {



  const data = listData;
  const prodata = singlePostData;

  const {pId} = useParams();

  //let postArray = Object.values(singlePostData); // Converts object properties into an array
  //let foundItem = postArray.find(post => post.id === targetId);


  const item = singlePostData.find((item) => item.id === parseInt(pId));
  console.log(item);
  
  //const [property, setProperty] = useState([]);
  //console.log(pId);
  
  
 /* useEffect(()=>{
    prodata.then((response)=>{
      const item = response.data.find((userItem)=>userItem.id === parseInt(pId));
      setProperty(item);
    });
  }, [pId]);*/

  //console.log(prodata);

  
  

 


  return (
    <div className='singlepage'>
      <div className="left">
        <div className="wrapper">
          <Slider images={item.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{item.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{item.address}</span>
                </div>
                <div className="price">
                  <span>$ {item.price}</span>
                </div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {item.description}
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listvertical">
            <div className="features">
              <img src="/utility.png" alt="" />
              <div className="feature">
                <p>Utilities</p>
                <span>Renter is responsible</span>
              </div>
            </div>
            <div className="features">
              <img src="/pet.png" alt="" />
              <div className="feature">
                <p>Pet Policy</p>
                <span>Pets Allowed</span>
              </div>
            </div>
            <div className="features">
              <img src="/fee.png" alt="" />
              <div className="feature">
                <p>Property Fees</p>
                <span>Must have 3x the rent in total household income</span>
              </div>
            </div>
          </div>
          <p className='title'>Room Sizes</p>
          <div className="sizes">
            <div className="sizeinfo">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="sizeinfo">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="sizeinfo">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className="places">
            <div className="place">
              <img src="/school.png" alt="" />
              <div className="details">
                <p>School</p>
                <span>250m away</span>
              </div>
            </div>
            <div className="place">
              <img src="/bus.png" alt="" />
              <div className="details">
                <p>Bus stop</p>
                <span>150m away</span>
              </div>
            </div>
            <div className="place">
              <img src="/restaurant.png" alt="" />
              <div className="details">
                <p>Resturant</p>
                <span>100m away</span>
              </div>
            </div>
          </div>
          
          <p className='title'>Location</p>
          <div className="map">
            <Smap items={data}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singlepage
Singlepage