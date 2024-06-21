import React, { useState } from 'react'
const Card = ({id,name,info,image,price,removeTour}) => {
    const [readmore,setReadmore] =useState(false);

    let description = readmore ? info : `${info.substring(0,200)}....`

    function readmoreHandler() {
      setReadmore(!readmore);
    }
    
  return (
    <div className='card'>
       <img src={image} className='image'></img>
          <div className='tour-info'>
             <h4 className='tour-price'>{price}</h4>
             <h4 className='tour-name'>{name}</h4>
           
           <div className='description'>{description}
              <span onClick={readmoreHandler} className='read-more'>
                {readmore ? `show less` : `read more`}
              </span>
          </div>
       </div>
       <button onClick={() => removeTour(id)} className='btn-red'>Not Interested</button>
    </div>
  )
}

export default Card
