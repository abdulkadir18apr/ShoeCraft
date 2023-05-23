import React, { useState } from 'react'


import "./css/bill.css"
import { useCartContext } from '../context/CartContext'

export  function Bill() {
    const {cart}=useCartContext();
    const cartTotal=cart.reduce((acc,cartProduct)=>acc+(Number(cartProduct.product.price)*cartProduct.quantity),0);

  return (
    <div className='bill'>
        <h1>Cart Summary</h1>
        <div className="line"></div>
        <div className="bill__row heading">
            <div className="bill__item">Products</div>
            <div className="bill__quantity">Qty</div>
            <div className="bill__price">Price</div>
            <div className="bill__total">Total</div>
        </div>
        {
            cart.map((cartProduct)=>(
                <div key={cartProduct.product._id} className="bill__row">
                <div className="bill__item">{cartProduct.product.name}</div>
                <div className="bill__quantity">{cartProduct.quantity}  </div>
                <div className="bill__price">${cartProduct.product.price}</div>
                <div className="bill__total">${cartProduct.product.price * cartProduct.quantity}</div>
            </div>

            ))
        }

       
        <div className="line"></div>
        <div className="bill__row heading">
            <div className="bill__item">Total</div>
            <div className="bill__quantity"></div>
            <div className="bill__price"></div>
            <div className="bill__total">${cartTotal}</div>
        </div>

    </div>
  )
}
