import React from 'react'
import { Link } from 'react-router-dom';
import map from '../../../assets/images/map.png'

export default function FindLocation() {
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
            <div className="location-details text-center">
              <div className="common-heading">
                <h2><span> The Anandlab</span> Network</h2>
              </div>
              <p>We are focused on uniting borders across <br/>geographies to make better diagnosis a reality. </p>
              <input type="text" placeholder="Select City" name="search"/>
              <Link to="/find-lab">Find a Location</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
