import React from 'react'
import { useWishlistContext } from '../context/WishlistContext'
import { ProductCard } from '../components/ProductCard';


import "./css/wishlist.css";

export  function Wishlist() {
    const {wishlist}=useWishlistContext();
  return (
    <div className='wishlist-container'>
      {wishlist.length===0 && <h1 className='WishlistHeading'> Your wishlist is craving some love! 💖 Give it a boost by adding items that make your heart skip a beat. 🌟🛍️</h1>}


      {wishlist.length!==0 && <h1 className='WishlistHeading'>Discover Your Dream Wishlist: Where Wishes Come to Life! ✨🎁</h1>}
   
    <div className='wishlist'>
        {wishlist.length!==0 &&
            wishlist.map((item)=>(
                <ProductCard key={item._id} productName={item?.name} productBrand={item?.brand} productCategory={item?.category} productGender={item?.gender} productId={item?._id} productImage={item.imageURL} productPrice={item?.price} productRating={item.rating}/>
            ))
        }
    </div>
    </div>
  )
}
