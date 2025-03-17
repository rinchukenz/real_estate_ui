import React from 'react'
import './Listpage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

function Listpage() {

    const data = listData;

  return (
    <div className='listpage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter/>
          {
          data.map((item)=>{
            return(
              <Card key={item.id} item={item}/>
            )
          })
          }
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default Listpage
