import React from 'react'
import map from '../../../assets/images/map.png'

export default function FindLocation() {
  return (
    <section class="maping">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="map-imge text-center">
              <img src={map} alt="" class="img-fluid"/>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="location-details text-center">
              <div class="common-heading">
                <h2><span> The Anandlab</span> Network</h2>
              </div>
              <p>We are focused on uniting borders across <br/>geographies to make better diagnosis a reality. </p>
              <input type="text" placeholder="Select City" name="search"/>
              <button type="submit">Find a Location</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
