import React, { useState } from 'react'

import "./css/productCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addToCart, addToWishlist, deleteFromWishlist } from '../apiCalls/products';
import { useWishlistContext } from '../context/WishlistContext';
import { useCartContext } from '../context/CartContext';

export  function ProductCard({productId,productName,productCategory,productGender,productImage,productBrand,productPrice,productRating}) {
  const product={_id:productId,name:productName,category:productCategory,brand:productBrand,price:productPrice,rating:productRating,imageURL:productImage,gender:productGender}
  const ratingStar=['','','','',''];
  const {wishlist}=useWishlistContext();
  const {addItemToCart}=useCartContext();
  const [isFavorite,setFavorite]=useState(wishlist.some((item)=>item._id===productId));

  ratingStar.fill("-regular",productRating);
  const {isLogin}=useAuthContext();
  const {addProductTowishlist,deleteProductFromWishlist}=useWishlistContext();
  const navigate=useNavigate();


  const addToWishlistHandler=async()=>{
    if(!isLogin){
      navigate("../login");
    }
    else{
      if(!isFavorite){
        //add item to favorite
        const res=await addToWishlist(productId);
        if(res.success){
          setFavorite(!isFavorite);
          addProductTowishlist(product)
        }
        else{
          alert("something went wrong")
        }
       
      }
      else{
          //remove from favorite
          const res=await deleteFromWishlist(productId);
          if(res.success){
            setFavorite(!isFavorite);
            deleteProductFromWishlist(product)
          }
          else{
            alert("Something went wrong");
          }
          
        }
       
    }

  }
  const addToCartClickHandler=async(e)=>{
    if(!isLogin){
      navigate("../login");
    }
    const res=await addToCart(e.target.value);
    if(res.success){
      alert("Item Added TO CArt");
      addItemToCart(product);
    }
    else{
      console.log(res);
    }
  }







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
        <FontAwesomeIcon icon={`fa${ratingStar[0]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[1]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[2]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[3]} fa-star`}/>
        <FontAwesomeIcon icon={`fa${ratingStar[4]} fa-star`} />
    </div>
    <div className="cardBtn">
    <button className='addToCartBtn' value={productId} onClick={(e)=>addToCartClickHandler(e)}>Add to Cart</button>
    <FontAwesomeIcon icon={`fa-${isFavorite?"solid":"regular"} fa-heart`} style={{color: "#d8134e",}} className='heartIcon' onClick={(e)=>addToWishlistHandler(e)} />
    </div>
   
    </div>
  )
}
