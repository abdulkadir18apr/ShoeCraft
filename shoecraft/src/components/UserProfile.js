import React from 'react'

import "./css/userProfile.css"
import { useAuthContext } from '../context/AuthContext'

export  function UserProfile() {
    const {logoutUser}=useAuthContext();
  return (
    <div className='userProfile'>
        <p><span>Name:  </span>{localStorage.getItem('userName')}</p>
        <p><span>Email:  </span>{localStorage.getItem('email')}</p>
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
