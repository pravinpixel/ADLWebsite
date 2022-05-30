import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sliders from 'react-slick'
import { setTestCartList, setTopBookedTest } from '../../../Redux/Actions/TestAction';
import { API_URL } from '../../../Redux/Constant/ApiRoute';

export default function BookedTestSliders() {
    var settings = {
        slidesToScroll : 1,
        infinite       : true,
        slidesToShow   : 6,
        focusOnSelect  : false, 
        autoplay       : true,
        dots           : false,
        arrows         : true,
        autoplaySpeed  : 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
        ]
    };
    const dispatch = useDispatch()
    const topBookedTestList     =   useSelector((state) =>  state.TopBookedTests.tests)
    useEffect(() => {
      return () => {
        axios.get(API_URL.TOP_BOOKED_TEST).then((response) => {
            dispatch(setTopBookedTest(response.data.data));
            dispatch(setTestCartList(response.data.data));
        })
      }
    }, []);

    const addTestToCart  = (test) => {
        if(localStorage.getItem('CartTestList') == undefined) {
            localStorage.setItem('CartTestList', JSON.stringify([]));
        }
        let currentCart = JSON.parse(localStorage.getItem('CartTestList'));
        localStorage.setItem('CartTestList', JSON.stringify([...currentCart,test]));
        console.log(currentCart)
    }

    return (
        <section className="diagnostics text-left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="common-heading">
                            <h2><span>Top Booked </span> Diagnostic Tests </h2>
                        </div>
                        {
                            topBookedTestList !== undefined ?  
                                <Sliders {...settings} className="topbooked-cases">
                                    {
                                        topBookedTestList.map((test,index) => (
                                            <div className="case" key={index}>
                                                <h3 className='text-capitalize'>{`${test.TestName.substring(0, 28)}...`}</h3>
                                                <h4 className='text-capitalize'>{`${test.BasicInstruction.substring(0, 38)}...`}</h4>
                                                <h5>&#8377; {test.TestPrice} <span className="strke"><s>&#8377;{test.TestPrice + 250}</s></span></h5>
                                                <p>
                                                    <a onClick={() => addTestToCart(test)}>ADD</a>
                                                </p>
                                            </div>
                                        ))
                                    }
                                </Sliders>
                            : null
                        } 
                    </div>
                </div>
            </div>
        </section>
    )
}