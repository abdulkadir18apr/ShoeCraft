import React from 'react'

import "./css/heading.css";

export  function Heading({heading}) {
  return (
    <div className='heading'>
        <div className="heading-container">
            <h1>{heading}</h1>
        </div>
    </div>
  )
}
