import React from 'react'

import "./css/cart.css";
import { CartItem } from '../components/CartItem';
import { Bill } from '../components/Bill';
import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';
import { Loader } from '../components/Loader';


export function Cart() {
  const {cart}=useCartContext();
  const {loading}=useProductContext();

  return (
    <div className='cart-container'>
        <div className="cart__header">
            <h1>Your Cart, Your Treasures!</h1>
        </div>
        {loading && <Loader/>}
        {
        !loading &&<> <div className="cart__items">
          {
            cart.map((cartProduct)=>(
              <CartItem key={cartProduct.product._id} cartProduct={cartProduct}/>
            ))
          }
        </div>
        {cart.length===0 && <div className="emptyCart">
          "Add items to your cart"
        </div>}
        {cart.length!==0 && <div className="cart__bill">
            <Bill/>
            

        </div>}
        </>
      }
    </div>

  )
}
