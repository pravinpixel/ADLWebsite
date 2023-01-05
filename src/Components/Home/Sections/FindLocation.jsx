import React, { useEffect, useState } from 'react'
import map from '../../../assets/images/map.png'
import axios from 'axios';
import { API_URL } from '../../../Redux/Constant/ApiRoute';
import { useNavigate } from 'react-router';
import { toast } from "react-hot-toast";

export default function FindLocation() {
  const navigate = useNavigate();
  const [city, setCity] = useState([])
  const [LocationId, setLocationId] = useState(null)

  const findALocation = () => {
    if(LocationId) {
      navigate('/find-lab',{ state: { LocationId: LocationId } })
    } else {
      toast.error('You need to choose a city first')
    }
  }

  const getCitiesMaster = () => {
    axios.get(API_URL.GET_CITY_MASTER).then((response) => {
      setCity(response.data) 
    })
  }

  useEffect(() => {
    getCitiesMaster()
  }, [])
  
  return (
    <section className="maping">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="map-imge text-center">
              <img src={map} alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="location-detailsx text-center">
              <div className="common-heading">
                <h2><span> The Anand Lab</span> Network</h2>
              </div>
              <p>We are focused on uniting borders across <br/>geographies to make better diagnosis a reality. </p>
              <div className="input-group">
                <select className='form-control' onChange={(e) => setLocationId(e.target.value)}>
                 <option value="">-- choose your city --</option>
                  {
                    city !== null ? 
                      Object.entries(city).map((item,i) => <option key={i} value={item[1]}>{item[0]}</option>)
                    : null
                  }
                </select>
                <button onClick={findALocation} className='btn-warning rounded'>Find a Location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
