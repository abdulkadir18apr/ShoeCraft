import React from 'react';

import "./css/orderSummary.css";

const OrderSummary = ({ show, onHide, dehliveryAddress, totalProducts, totalPrice }) => {
    const {name,address,city,state,pincode,contact}=dehliveryAddress
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onHide}>&times;</span>
            <h3>Order Summary</h3>
            <div className="addressCard">
              <h5>Dehlivering To:</h5>
              <p>{name}</p>
              <p>{address}</p>
              <p>{city}{"  "} {pincode}</p>
              <p>{state}</p>
              <p>{contact}</p>
            </div>
            <p>Total Products: {totalProducts}</p>
            <p>Sub Total: {totalPrice}</p>
            <p>Delivery Charges: ${3}</p>
            <p className='bold-paragraph'>Total Price: ${totalPrice + 3}</p>
            <button className='paymentBtn'>Proceed to payment</button>
          </div>
    
        </div>
      )}
    </>
  );
};

export default OrderSummary;
