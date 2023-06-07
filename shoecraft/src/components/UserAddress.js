import React, { useState } from 'react'

import "./css/userAddress.css";
import { useAuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { addAddress, deleteAddress, updateAddress } from '../apiCalls/address';
import { useProductContext } from '../context/ProductContext';
import { Loader } from './Loader';


export function UserAddress() {
    const {loading,setLoading}=useProductContext();
    const [isNewAddress,setIsNewAddress]=useState(false);
    const {addresses,setAddresses}=useAuthContext();
    const editClickHandler=(id)=>{
        setAddresses(addresses.map((address)=>address._id===id?{...address,edit:true}:address));
    }
    const deleteAddressClickHandler=async(id)=>{
        setLoading(true)
        const res=await deleteAddress(id);
        if(res.success){
            setAddresses((prev)=>prev.filter((address)=>address._id!==id));
            toast("address Deleted");
        }
        else{
            toast("Something went Wrong");
        }
        setLoading(false);
    }
    return (
        <div className='userAddress'>
            {loading && <Loader/>}
            <div className="addnewAddress">
                <button onClick={()=>setIsNewAddress(()=>true)}>+</button>
                <p onClick={()=>setIsNewAddress(()=>true)}>Add New Address</p>
            </div>
            {
                isNewAddress && <AddressForm setIsNewAddress={setIsNewAddress} isNewAddress={isNewAddress}/>
            }
            {console.log("Addressseobj",addresses)}
            {
                  
                addresses.map((address)=>(
                 <> 
               
                {!address.edit && <div className="addressCard" key={address._id}>
                <h1>{address.name}</h1>
                <div className="contact">
                    <p>{address.contact}</p>
                    <p>{address.alternatePh}</p>
                </div>
                <p>{address.address}</p>
                <div className="address">
                    <p>{address.pincode}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>
                </div>
                <div className="addresssBtn">
                    <button className="edit" disabled={loading} onClick={(e)=>editClickHandler(address._id)}>Edit</button>
                    <button className="delete" disabled={loading} onClick={(e)=>deleteAddressClickHandler(address._id)}>Delete</button>
                </div>

            </div>}
            {
                address.edit && <AddressForm setIsNewAddress={setIsNewAddress} editAddress={address} isNewAddress={isNewAddress} />
            }
                 
                 </>


                ))
            }
            

        </div>
    )
}

const AddressForm = ({setIsNewAddress , editAddress, isNewAddress}) => {
    const {loading,setLoading}=useProductContext();
    const [address,setAddress]=useState(editAddress || {});
    const {setAddresses}=useAuthContext();
    const addressInputChangeHandler=(e)=>{
        setAddress((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const addAddressClickHandler=async(e)=>{
        setLoading(true);
        if(address.name.length===0 || address.address.length===0 || address.contact===0){
            toast("Please fill all the details")
        }else{
         if(isNewAddress){
            const res=await addAddress(address);
            if(res.success){
                setAddresses((prev)=>([...prev,{...address,edit:false}]));
                toast("Address Added");
                setIsNewAddress(false);
            }
            else{
                toast("something went wrong");
            }
          

         }
         else{
            const res=await updateAddress(address._id,address);
            if(res.success){
                setAddresses((prev)=>prev.map((add)=>add._id===address._id?{...address,edit:false}:{...add}));
                toast("Address updated");
            }
            else{
                toast("something went wrong")
            }
           
         }
        }
        setLoading(false);
    }

const streets = ["Main Street", "First Avenue", "Park Road", "Oak Lane"];

const cities = ["New York", "London", "Paris", "Tokyo"];
const names = ["John", "Alice", "Michael", "Emily", "David", "Olivia"];
const contact = [
    "+1234567890",
    "+9876543210",
    "+1112223333",
    "+4445556666",
    "+7778889999"
  ];
  


function generateRandomAddress() {
  const temp = {};
  temp.address = streets[Math.floor(Math.random() * streets.length)];
  temp.name = names[Math.floor(Math.random() * names.length)];
  temp.city = cities[Math.floor(Math.random() * cities.length)];
  temp.pincode = Math.floor(Math.random() * 1000000);
  temp.contact=contact[Math.floor(Math.random()*contact.length)];
  temp.alternatePh=contact[Math.floor(Math.random()*contact.length)];
  temp.state="Madhaya Pradesh";
  setAddress(()=>temp);
}

    return (
      
        <div className="addressForm">
            {loading && <Loader/>}
            <div className="basicDetail">
                <div className="row">
                    <input type="text" name="name" id="name" placeholder='Name' value={address.name} onChange={(e)=>addressInputChangeHandler(e)} required />
                    <input type="text" name="contact" id="contact" placeholder='Contact No.' value={address.contact} onChange={(e)=>addressInputChangeHandler(e)} required   />            
                </div>

                <div className="row">
                    <input type="text" name="pincode" id="pincode" placeholder='Pin-Code' value={address.pincode} onChange={(e)=>addressInputChangeHandler(e)} />
                    <input type="text" name="city" id="city" placeholder='city' value={address.city} onChange={(e)=>addressInputChangeHandler(e)} />
                </div>


            </div>
            <textarea placeholder='Address' name="address" rows={6} onChange={(e)=>addressInputChangeHandler(e)} value={address.address}></textarea>
            <div className="statedetails row">
                <input type="text" name="alternatePh" id="alternateContact" placeholder='alternate ph' value={address.alternatePh} onChange={(e)=>addressInputChangeHandler(e)} />
                <select name="state" onChange={(e)=>addressInputChangeHandler(e)}  value={address.state}>
                    <option value="">Select a State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                </select>

            </div>
            <div className="addresssBtn">
                <button className="add" onClick={addAddressClickHandler} disabled={loading}>Add</button>
                <button className="reset" onClick={()=>setAddress({name:"",contact:"",address:"",alternatePh:"",city:"",state:"",pincode:""})} disabled={loading}>Reset</button>
                <button className="reset" onClick={generateRandomAddress} disabled={loading}>Random Data</button>
                <button className="cancel" onClick={()=>setIsNewAddress(false)} disabled={loading}>Cancel</button>
            </div>
        </div>

    )
}
