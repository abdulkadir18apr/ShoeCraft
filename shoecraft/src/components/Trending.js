import React from 'react'
import "./css/trending.css";
import shoes1 from "./img/shoes/shoes1.jpg"
import shoes2 from "./img/shoes/shoes2.jpg"
import shoes3 from "./img/shoes/shoes3.jpg"
import shoes4 from "./img/shoes/shoes4.jpg"

export  function Trending() {
  return (
    <div className='trending'>
        <img src={shoes1} alt="shoes" loading='lazy'/>
        <img src={shoes2} alt="shoes" loading='lazy'/> 
        <img src={shoes3} alt="shoes" loading='lazy'/>
        <img src={shoes4} alt="shoes" loading='lazy'/>
      
      
    </div>
  )
}
