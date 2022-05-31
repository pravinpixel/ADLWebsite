import React from 'react'
import { useSelector } from 'react-redux';
import cart from './../../assets/images/cart.png';

export default function CartCount() {
    const cartItemCount  = useSelector((state) => state.TestCartList.cartTest);

    return (
        <a href='#' className='position-relative'>
            <img src={cart} alt="" className="img-fluid"/>
            <b class="badge badge-danger cart-count">
                {   
                    cartItemCount !== undefined 
                    ? 
                        cartItemCount.length 
                    : 
                    localStorage.getItem('CartTestList') !== null 
                    ? 
                        JSON.parse(localStorage.getItem('CartTestList')).length 
                    : 0
                }
            </b>
            <span>Cart</span>
        </a>
    )
}