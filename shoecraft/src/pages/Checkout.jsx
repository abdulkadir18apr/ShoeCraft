import React, { useState } from 'react'
import { OrderDetails } from '../components/OrderDetails';
import { AddressList } from '../components/AddressList';
import OrderSummary from '../components/OrderSummary';
import { useCartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { useProductContext } from '../context/ProductContext';
import { Loader } from '../components/Loader';



export  function Checkout() {
  const [deliveryAddress,setDehliveryAddress]=useState({});
  const {loading}=useProductContext();
  const {cart}=useCartContext();
  const cartTotal=cart.reduce((acc,cartProduct)=>acc+(Number(cartProduct.product.price)*cartProduct.quantity),0);
  const totalQuantity=cart.reduce((acc,{quantity})=>acc+Number(quantity),0)
  const [show,setShow]=useState(false);
  const onHide=()=>setShow(false);
  const placeOrderClickHandler=()=>Object.keys(deliveryAddress).length===0?toast("Please Select Address"):setShow(true)
  return (
    <div classname="checkout" style={{display:"flex",justifyContent:"space-evenly",marginTop:"2rem",}} >
      {loading && <Loader/>}
      <OrderSummary show={show} onHide={onHide} dehliveryAddress={deliveryAddress} totalPrice={cartTotal} totalProducts={totalQuantity}/>
        {!loading && <AddressList setDehliveryAddress={setDehliveryAddress}/>}
     { !loading && <div className="order" style={{display:"flex",flexDirection:"column",gap:"5px"}}>
         <OrderDetails deliveryAddress={deliveryAddress}/>
         <button className='add' style={{padding:"8px",color:"white",cursor:"pointer",marginBottom:"2rem"}} onClick={placeOrderClickHandler}>Place-Order</button>
        </div>}
       
    </div>
  )
}
