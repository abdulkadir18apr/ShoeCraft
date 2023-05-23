import React from 'react'

import "./css/cart.css";
import { CartItem } from '../components/CartItem';
import { Bill } from '../components/Bill';
import { useCartContext } from '../context/CartContext';


export function Cart() {
  const {cart}=useCartContext();

  return (
    <div className='cart-container'>
        <div className="cart__header">
            <h1>Your Cart, Your Treasures!</h1>
        </div>
        <div className="cart__items">
          {
            cart.map((cartProduct)=>(
              <CartItem key={cartProduct.product._id} cartProduct={cartProduct}/>
            ))
          }


        </div>
        <div className="cart__bill">
            <Bill/>

        </div>
    </div>
  )
}
