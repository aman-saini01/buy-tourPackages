import React, { useState } from 'react'
import Tours from './components/Tours'
import data from './data'
import "./styles/index.css"
const App = () => {
   const [tours , setTours] = useState(data);
   function removeTour(id) {
     const newTours = tours.filter(tour => tour.id!==id);
     setTours(newTours);
   }
    
   if(tours.length === 0) {
    return(
      <div className='refresh'>
        <h1>NO Tours Left</h1>
        <button onClick={() => setTours(data)} className='btn-white'>Refresh</button>
      </div>
    )
   }

  return(
    <div className='App'>
          
          <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>


  )

}

export default App