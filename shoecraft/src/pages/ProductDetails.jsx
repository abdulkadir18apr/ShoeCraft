import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

import { addToCart, addToWishlist, deleteFromWishlist, fetchProduct } from '../apiCalls/products';
import { toast } from "react-toastify";

import "./css/productDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWishlistContext } from '../context/WishlistContext';
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import { useProductContext } from '../context/ProductContext';
import { Loader } from '../components/Loader';

export function ProductDetails() {
    const { id } = useParams();
    const {isLogin}=useAuthContext();
    const {addItemToCart}=useCartContext();
    const {loading,setLoading}=useProductContext();
    const {wishlist,addProductTowishlist,deleteProductFromWishlist}=useWishlistContext();
    const [product, setProduct] = useState([]);
    const [isFavorite, setFavorite] = useState(wishlist.some((item) => item._id === product._id));
    const ratingStar=['','','','',''];
    ratingStar.fill("-regular",product.rating);
    const navigate=useNavigate();

    const getProductFromId = async (id) => {
        setLoading(true);
        const res = await fetchProduct(id);
        if (res.success) {
            setProduct(() => res.product);
          
        }
        else {
           
            toast("Something went Wrong");
        }
        setLoading(false);
    }

    const addToCartClickHandler=async(e)=>{
        if(!isLogin){
          navigate("../login");
        }
        const res=await addToCart(e.target.value);
        if(res.success){
          addItemToCart(product);
          toast("Item Added to Cart");
    
        }
        else{
          toast("Try login Again");
        }
      }

      const addToWishlistHandler=async()=>{
        if(!isLogin){
          navigate("../login");
        }
        else{
          if(!isFavorite){
            //add item to favorite
            const res=await addToWishlist(product._id);
            if(res.success){
              toast("Item Added to wishlist");
              setFavorite(!isFavorite);
              addProductTowishlist(product)
            }
            else{
              toast("something went wrong Try Login Again");
            }
           
          }
          else{
              //remove from favorite
              const res=await deleteFromWishlist(product._id);
              if(res.success){
                setFavorite(!isFavorite);
                deleteProductFromWishlist(product)
                toast("Item Removed from Wishlist");
              }
              else{
                toast("Something went wrong");
              }
              
            }
           
        }
    
      }
    

    useEffect(() => {
        getProductFromId(id);
    }, [])

    return (
        <div className="productPage">
            {loading && <Loader/>}
            {!loading && <div className="productDetailsCard">
                <div className="productImage">
                    <img src={product?.imageURL} alt="productImage" />
                </div>
                <div className="productDescription">
                    <h1>{product.name}</h1>
                    {/* <p className='bold-paragraph'>{product.brand}</p> */}
                    <div className="item__brand category-gender ">
                        <span>{product.brand}</span> <span>{product.gender}</span><span>{product.category}</span>
                    </div>
                    <p className='bold-paragraph price'>${product.price}</p>
                    <div className="line"></div>
                    <p>Avalaibitily:<span className='bold-paragraph'>{"  Only "} {product?.items_left}{"  Left"}</span></p>

                    <div className="productrating">
                        <FontAwesomeIcon icon={`fa${ratingStar[0]} fa-star`} color="red" />
                        <FontAwesomeIcon icon={`fa${ratingStar[1]} fa-star`} color="red"/>
                        <FontAwesomeIcon icon={`fa${ratingStar[2]} fa-star`} color="red"/>
                        <FontAwesomeIcon icon={`fa${ratingStar[3]} fa-star`} color="red"/>
                        <FontAwesomeIcon icon={`fa${ratingStar[4]} fa-star`} color='red' />
                    </div>

                    <div className="cardBtn">
                        <button className='addToCartBtn' value={product._id} onClick={(e)=>addToCartClickHandler(e)}>Add to Cart</button>
                        <FontAwesomeIcon icon={`fa-${isFavorite ? "solid" : "regular"} fa-heart`} style={{ color: "#d8134e", }} className='heartIcon' onClick={()=>addToWishlistHandler()} />
                    </div>







                </div>


            </div>
        }
        </div>
    )
}