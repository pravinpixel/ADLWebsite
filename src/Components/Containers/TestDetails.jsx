import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { removeTestDetails, setTestDetails } from '../../Redux/Actions/TestAction';
import { API_URL } from '../../Redux/Constant/ApiRoute';
import TestCart from './TestCardComponent';

export default function TestDetails() {
  const {TestId}    = useParams();
  const dispatch    = useDispatch();
  const testDetails = useSelector((state) => state.TestDetails.TestDetails)
  
 
  const getTestDetails = async () => {
    const response = await axios.get(API_URL.TEST_DETAILS + TestId).catch((err) => console.log(err))
    dispatch(setTestDetails(response.data.data))
  }
  
  useEffect(() => { 
    return () => {
      if(TestId && TestId !== "")   getTestDetails();
      dispatch(removeTestDetails())
    }
  }, [])
  
  return (
    <div>
      TestDetails
      <div className="display-5">
        {
          testDetails !== undefined ?
            <div className='text-center'>
              <br />
              <br />
              <br />
              <br />
              <br />
              <TestCart />
              <br />
              <h1>{testDetails.TestName}</h1>
              <h3>{testDetails.TestPrice}</h3>
            </div>
          : null
        }
      </div>
    </div>
  )
}