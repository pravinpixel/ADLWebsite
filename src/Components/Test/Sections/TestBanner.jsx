import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { API_URL } from '../../../Redux/Constant/ApiRoute'

export default function TestBanner(props) {
  const TestLocation = useSelector((state) => state.TestLocation);
  useEffect(() => {
    axios.get(API_URL.ORGAN_LIST).then((response) => {
      SetOrgans(response.data)
    })
    axios.get(API_URL.CONDITIONS_LIST).then((response) => {
      SetConditions(response.data)
    })
  },[]); 
  const [Organs, SetOrgans] = useState([]);
  const [Conditions, SetConditions] = useState([]);
  const [OrganFilter, SetOrganFilter] = useState(null);
  const [ConditionsFilter, SetConditionsFilter] = useState(null);
  return (
    <section className="search-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="serchnig text-center">
              <h1 className="mb-3">Home Collection Booking in <span style={{ textTransform: 'capitalize' }}>{TestLocation !== null ? TestLocation.TestLocation.replaceAll('-', ' ') : null}</span></h1>
              <input
                type="text"
                placeholder="Search for Health Packages / Tests / Labs"
                onChange={(e) => {
                  props.getAllTest(props.sortBy, e.target.value)
                  props.setSearch(e.target.value)
                }}
              />
              {
                Organs && <>
                  <hr className='bg-light'/>
                  <div className="testBySec d-flex justify-content-center align-items-center">
                    <label className="testTxt">Filter By Organs :</label>
                    <div className="badgeSec">
                      <ul className="badgeList"> 
                        {
                          Organs&&Organs.map(item => (
                            <li className={OrganFilter == item.name ? 'active' : ''}> 
                              <a className="darkBdrBut text-white" onClick={() => SetOrganFilter(item.name)}>
                                {item.name}
                              </a> 
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                  <hr className='bg-light'/>
                </>
              }
              {
                Conditions && <>
                    <div className="testBySec">
                      <h4 className="testTxt">Filter By Conditions </h4>
                      <div className="badgeSec">
                        <ul className="badgeList"> 
                          {
                            Conditions.map(item => (
                              <li className={ConditionsFilter == item.name ? 'active' : ''}> 
                                <a className="darkBdrBut text-white" onClick={() => SetConditionsFilter(item.name)}>
                                  {item.name}
                                </a> 
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div> 
                  <hr className='bg-light'/>
                </>
              } 
              <button className='btn-danger rounded'><i className="fa fa-repeat mr-1"></i> Clear Filters</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
