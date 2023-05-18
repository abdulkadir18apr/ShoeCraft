import React from 'react'

import "./css/productCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export  function ProductCard({productName,productCategory,productGender,productImage,productBrand,productPrice,productRating}) {
  return (
    <div className='productCard'> 
        <div className="patch">
    <p className='productCategory'>{productCategory}</p>
    <p className='productGender'>{productGender}</p>
    </div>
    <div className="productImage">
        <img src={productImage} alt="Product" />
    </div>

    <div className="productDetails">
    <p>{productName}</p>
    <p>{productBrand}</p>
    <p>${productPrice}</p>
    </div>
    <div className="productrating">
        <FontAwesomeIcon icon="fa fa-star"/>
        <FontAwesomeIcon icon="fa fa-star"/>
        <FontAwesomeIcon icon="fa-regular fa-star"/>
        <FontAwesomeIcon icon="fa-regular fa-star"/>
        <FontAwesomeIcon icon="fa-regular fa-star"/>
    </div>
    <button className='addToCartBtn'>Add to Cart</button>
    </div>
  )
}
