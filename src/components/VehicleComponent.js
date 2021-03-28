import React, { Component } from 'react';
import './VehicleComponent.css';
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';


const VehicleComponent = (props) => {
  console.log(props, "props passed")



  const vehicle_info = ({ vehicledetails }) => {
    if (vehicledetails) {


      return (
        <>
          {/* <div className='backgroundWall' style={{ backgroundImage: `url(${vehicledetails.image_url})` }} ></div> */}

          <div className='container'>

            <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
              <div className="col-xs-5 col-sm-6 col-lg-3">
                <div ><img className='vehicle_banner' src={vehicledetails.image_url} alt='vehicle_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
                  <div style={{ textAlign: 'left' }}>{vehicledetails.name}</div>
                </div>

              </div>

              <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                <p>Disclosed Information about <b>{vehicledetails.name} </b></p>
                <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>

                <br />
                <small>
                Description : <b> {vehicledetails.description} </b><br />
                Vehicle Class : <b> {vehicledetails.vehicle_class} </b> <br />
                Length : <b> {vehicledetails.length} </b> <br />
          
                </small>

              </div>
            </div>
          </div>
        </>
      )
    }
  }

  const vehicle_tile = (vehicledetails) => {
      if (vehicledetails) {
          return vehicledetails.films.map((item) => {
              const film_route = '/films/'+ item.id + '#top'
              return (
                  <>
                      <div className='vehicle_p_c'><HashLink to={film_route}><img className='vehicle_film' src={item.image_url} alt='film_poster'></img></HashLink><br /><center>{item.name}</center></div>
                  </>
              )
          })
      }
  }



  return (
    <>
      <div className="main">{vehicle_info(props)}</div>

      <div  style={{ margin: '10px' }}>






            </div>

            <div className="vehicle_tile main" id='vehicle _page_vehicle'>
                <h4 style={{ marginLeft: '20px' }}>Appeared In </h4>
                <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {vehicle_tile(props.vehicledetails)}
            </div>
    </>
  )
}

export default VehicleComponent;