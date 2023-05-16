import React from 'react'
import "./css/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export  function Footer() {
  return (
    <div className='footer'>
        <p>Let's Connect:-</p>
        <div className="icons">
        <a href="https://www.linkedin.com/in/abdul-kadir-540a71123" target="_blank"><FontAwesomeIcon icon="fa-brands fa-linkedin" size='2xl' color="darkblue" /></a>
        <a href="https://twitter.com/abdulq314" target="_blank"><FontAwesomeIcon icon="fa-brands fa-twitter" size='2xl' color="skyblue" /></a>
        <a href=""  target="_blank"><FontAwesomeIcon icon="fa-brands fa-instagram" size='2xl' color='red' /></a>
        <a href="https://www.github.com/abdulkadir18apr" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size='2xl' color='blue' /></a>

        </div>
   
    </div>
  )
}
