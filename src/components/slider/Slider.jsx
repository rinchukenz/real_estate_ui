import React, { useState } from 'react'
import './Slider.scss'

function Slider({images}) {

  const[imageIndex, setImageIndex] = useState(null);

 const changeSlide = (direction)=>{
    if(direction === "left"){
        if(imageIndex === 0){
          setImageIndex(images.length - 1);
        }else{
          setImageIndex(imageIndex-1);
        }
    }else{
      if(imageIndex === images.length - 1){
        setImageIndex(0);
      }else{
        setImageIndex(imageIndex + 1);
      }

    }
 }

  return (
    <div className='slider'>
      {(imageIndex != null) && (
        <div className="fullslider">
        <div className="arrow">
            <img src="/whiteleftarrow.png" alt="" onClick={()=>changeSlide("left")} />
        </div>
        <div className="imgcontainer">
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className="arrow">
            <img src="/whiterightarrow.png" alt="" onClick={()=>changeSlide("right")} />
        </div>
        <div className="close" onClick={()=>setImageIndex(null)}>x</div>
      </div>)}
      
      <div className="bigimg">
        <img src={images[0]} alt="" onClick={()=>setImageIndex(0)} />
      </div>
      <div className="rightimgs">

      <div className="smallimg">
        {
          images.slice(1).map((image, index)=>{
            return(
              <img src={image} key={index} onClick={()=>setImageIndex(index+1)}/>
             
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Slider
