import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

import "./css/addressList.css"

export function AddressList({setDehliveryAddress}) {
    const { addresses } = useAuthContext();
    const inputChangeHandler=(e,address)=>{
        setDehliveryAddress(address);
    }
    return (
        <div className='addressList'>
            {
                addresses.map((address)=>(
                    <div className="address-card" key={address._id}>
                <input type="radio" name="address" id="address"  onChange={(e)=>inputChangeHandler(e,address)} />
                <div className="address">
                    <p>{address.name}</p>
                    <p>{address.address}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>
                    <p>{address.pincode}</p>
                    <p>Contact: {address.contact}</p>
                </div>
            </div>
                ))
            }
        </div>
    )
}
