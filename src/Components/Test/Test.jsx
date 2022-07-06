import React, { useEffect, useState } from 'react'
import TestBanner from './Sections/TestBanner' 
import PopularTests from './Sections/PopularTests'
import PopularPackages from './Sections/PopularPackages'
import TestHealthPackages from './Sections/TestHealthpackages'
import { useDispatch, useSelector } from 'react-redux'
import { setAllTestDetails, setTestCartList } from '../../Redux/Actions/TestAction'
import axios from 'axios'
import { API_URL } from '../../Redux/Constant/ApiRoute'
import { AddToCartList, RemoveToCartList } from '../../Helpers'
export default function test() {

  const dispatch                 = useDispatch();
  const testListing              = useSelector((state) => state.TestList.testList);
  const [tackTest, setTackTest]  = useState(8);
  const [sortBy, setSortBy]      = useState('high');
  const [loader, setLoader]      = useState(true);
  const [search , setSearch]     = useState(null);

  const getAllTest = (sortBy, search , tackTests) => { 
    setLoader(true)
    axios.post(API_URL.TEST_LISTS, { 
      search : search !== null ? search : null,
      tack   : tackTests !== undefined ? tackTests : tackTest,
      sort   : sortBy
    }).then((response) => {
      dispatch(setAllTestDetails(response.data.data));
      setLoader(false)
    });
  };
  
  const sortByPrice = (sortingValue) => {
    getAllTest(sortingValue, search);
  }
  const addTestToCart = (testDetails) => {
    AddToCartList(testDetails)
    dispatch(setTestCartList(JSON.parse(localStorage.getItem('CartTestList'))));
    getAllTest();
  };
  const removeTestToCart = (test) => {
    var balancedCartItems = RemoveToCartList(test)
    dispatch(setTestCartList(balancedCartItems));
    getAllTest();
  };
  
  useEffect(() => {
    document.title = "Test Details Page";
    window.scroll(0,0)
    getAllTest();
  }, []);
  return (
    <div>
      <TestBanner 
        getAllTest={getAllTest} 
        sortBy={sortBy}
        setSearch={setSearch}
      />
      
      <TestHealthPackages 
        testListing={testListing}
        getTestData={getAllTest}
        search={search} setSearch={setSearch}
        tackTest={tackTest} setTackTest={setTackTest}
        sortByPrice={sortByPrice}
        loader={loader} setLoader={setLoader} 
      />
      <PopularTests />
      <PopularPackages />
    </div>
  )
}