import React from 'react'
import { useSelector } from 'react-redux';
import cart from './../../assets/images/cart.png';

export default function CartCount() {
    const cartItemCount  = useSelector((state) => state.TestCartList.cartTest);

    return (
        <a href='#' className='position-relative'>
            <img src={cart} alt="" className="img-fluid"/>
            
                {
                    cartItemCount !== undefined 
                    ? 
                        <b className="badge badge-dark cart-count">{cartItemCount.length}</b>
                    : 
                        localStorage.getItem('CartTestList') !== null 
                    ?
                        <b className="badge badge-dark cart-count">{JSON.parse(localStorage.getItem('CartTestList')).length}</b>
                    :   null
                }
            
            <span>Cart</span>
        </a>
    )
}