import React from 'react'
import {listData} from '../../lib/dummydata'
import Card from '../card/Card';
import './Mylist.scss'

function Mylist() {

    const data = listData;

  return (
    <div className='mylist'>
        {
            data.map((item) =>{
                return(

                    <Card key={item.id} item={item}/>
                )
            })
        }
      
    </div>
  )
}

export default Mylist
