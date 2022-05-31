import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { API_URL } from '../../Redux/Constant/ApiRoute';

export default function TestDetails() {
  const {TestId} = useParams();
  const getTestDetails = async () => {
    const response = await axios.get(API_URL.TEST_DETAILS + TestId).catch((err) => console.log(err))
    console.log(response.data.data)
  }
  useEffect(() => {
    return () => {
      getTestDetails()
    }
  }, [])
  
  return (
    <div>
      TestDetails
      <div className="display-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus laudantium, 
        nostrum molestias natus quidem vitae officia consequuntur voluptatem excepturi laboriosam saepe soluta optio dolores veritatis corporis incidunt minima sit.
      </div>
    </div>
  )
}