import React from 'react'
import { useDispatch } from 'react-redux';
import { CheckCartBucket } from '../../Helpers';
import { addToCart, removeFromCart, setTestCartList } from '../../Redux/Actions/TestAction';

export default function CartBtn(props) {
    const dispatch = useDispatch()
    return (
            CheckCartBucket(props.testData.TestId) === false 
            ?
                <button className="text-white"
                    onClick={() => {
                        dispatch(addToCart(props.testData));
                        dispatch(
                            setTestCartList(
                                JSON.parse(localStorage.getItem("CartTestList"))
                            )
                        );
                        props.getData()
                    }}
                >
                    <i className="fa fa-cart-plus mr-1"></i>ADD
                </button>
            :
            <button  className="remove-btn"
                onClick={() => {
                    dispatch(removeFromCart(props.testData));
                    dispatch(
                        setTestCartList(
                            JSON.parse(localStorage.getItem("CartTestList"))
                        )
                    );
                    props.getData()
                }}
            >
                <small><i className="fa fa-times mr-2"></i>Remove</small>
            </button>
    )
}
