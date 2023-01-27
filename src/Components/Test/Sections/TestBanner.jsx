import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setTestFilters } from '../../../Redux/Actions/TestAction';
import { API_URL } from '../../../Redux/Constant/ApiRoute'

export default function TestBanner(props) {
  const [Organs, SetOrgans]                     = useState([]);
  const [Conditions, SetConditions]             = useState([]);
  const [OrganFilter, SetOrganFilter]           = useState(null);
  const [ConditionsFilter, SetConditionsFilter] = useState(null);
  const TestLocation                            = useSelector((state) => state.TestLocation);
  const filters                                 = useSelector((state) => state.filters.filters);
  const dispatch                                = useDispatch()

  const fetchOrgans = () => {
    axios.get(API_URL.ORGAN_LIST).then((response) => {
      SetOrgans(response.data)
    })
  }
  const fetchConditions = () => {
    axios.get(API_URL.CONDITIONS_LIST).then((response) => {
      SetConditions(response.data)
    }) 
  }
  const ClearAllFilters = () => {
    dispatch(setTestFilters({
      TestName       : null,
      TestPrice      : 'high',
      HealthCondition: null,
      OrganName      : null,
      Tack           : 8,
    }));
    SetOrganFilter(null)
    SetConditionsFilter(null)
  }
  useEffect(() => {
    fetchOrgans()
    fetchConditions()
    SetOrganFilter(filters.OrganName)
    SetConditionsFilter(filters.HealthCondition)
  },[]);  

  const filterHandler = (type, value) => {  
    dispatch(setTestFilters({...filters,[type]:value})) 
  }
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
                onChange={(e) => filterHandler('TestName',e.target.value)}
                autoFocus
              />
              {
                Organs && <>
                  <div className="testBySec">
                    <label className="testTxt mb-4">Filter By Organs</label>
                    <div className="badgeSec">
                      <ul className="badgeList"> 
                        {
                          Organs&&Organs.map((item,i) => (
                            <li key={i} className={OrganFilter == item.name ? 'active' : ''}> 
                              <a className="darkBdrBut text-white" onClick={() => {
                                  filterHandler("OrganName",item.name)
                                  SetOrganFilter(item.name)
                                }}>
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
                            Conditions.map((item,i) => (
                              <li key={i} className={ConditionsFilter == item.name ? 'active' : ''}> 
                                <a className="darkBdrBut text-white" onClick={() => {
                                  filterHandler("HealthCondition",item.name)
                                  SetConditionsFilter(item.name)
                                }}>
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
              <button className='btn-danger rounded' onClick={ClearAllFilters}><i className="fa fa-repeat mr-1"></i> Clear Filters</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
