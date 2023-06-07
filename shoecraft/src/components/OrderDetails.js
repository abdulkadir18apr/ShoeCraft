import React from 'react'

import "./css/orderDetails.css";
import { useCartContext } from '../context/CartContext';

export function OrderDetails({deliveryAddress}) {
  
    const { cart } = useCartContext();
    const cartTotal = cart.reduce((acc, cartProduct) => acc + (Number(cartProduct.product.price) * cartProduct.quantity), 0);
    const {name,address,contact,city,state,pincode}=deliveryAddress
    return (
        <div className='orderDetails'>
            <h1>Order Details</h1>
            <div className="purchaseItem">
                <p className='bold-paragraph'>Purchase Items</p>
                <ul>
                    {
                        cart.map((cartProduct) => (
                            <div key={cartProduct.product._id} className="bill__row">
                                <div className="bill__item">{cartProduct.product.name}</div>
                                <div className="bill__quantity">{cartProduct.quantity}  </div>
                                <div className="bill__price">${cartProduct.product.price}</div>
                                <div className="bill__total">${cartProduct.product.price * cartProduct.quantity}</div>
                            </div>

                        ))
                    }
                </ul>
            </div>
            <div className="line"></div>
            <div className="billing">
                <p className='bold-paragraph'>Billing</p>
                <div className="bill__row heading">
                    <div className="bill__item">Sub-Total</div>
                    <div className="bill__quantity"></div>
                    <div className="bill__price"></div>
                    <div className="bill__total">${cartTotal}</div>
                </div>
                <div className="bill__row heading">
                    <div className="bill__item">Delivery-Charge</div>
                    <div className="bill__quantity"></div>
                    <div className="bill__price"></div>
                    <div className="bill__total">${3}</div>
                </div>
                <div className="line"></div>
                <div className="bill__row heading">
                <div className="bill__item bold-paragraph">Total</div>
                    <div className="bill__quantity bold-paragraph"></div>
                    <div className="bill__price"></div>
                    <div className="bill__total bold-paragraph">${cartTotal + 3}</div>
                </div>
                <div className="line"></div>
                <div className="delivery">
                <p className='bold-paragraph'>Delivering To:</p>
                    <div className="delivery-address">
                  
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{city}{"  "}{state}</p>
                    <p>{pincode}</p>
                    <p>{contact}</p>

                    </div>

                </div>




            </div>

        </div>
    )
}
