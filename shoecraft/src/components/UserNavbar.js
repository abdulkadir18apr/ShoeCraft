import React from 'react'
import { NavLink} from 'react-router-dom'

import "./css/userNavbar.css";

export  function UserNavbar() {

  return (
    <div className='userNavbar'>

            <NavLink activeClassName="active" to="" >Profile</NavLink>
            <NavLink activeClassName="active" to="address">Address Information</NavLink>
     
    </div>
  )
}
