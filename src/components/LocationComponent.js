import React, { Component } from 'react';
import './LocationComponent.css';
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';


const LocationComponent = (props) => {
  console.log(props, "props passed")



  const location_info = ({ locationdetails }) => {
    if (locationdetails) {


      return (
        <>
          {/* <div className='backgroundWall' style={{ backgroundImage: `url(${locationdetails.image_url})` }} ></div> */}

          <div className='container'>

            <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
              <div className="col-xs-5 col-sm-6 col-lg-3">
                <div ><img className='location_banner' src={locationdetails.image_url} alt='location_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
                  <div style={{ textAlign: 'left' }}>{locationdetails.name}</div>
                </div>

              </div>

              <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                <p>Disclosed Information about <b>{locationdetails.name} </b></p>
                <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>

                <br />
                <small>
                Climate : <b> {locationdetails.climate} </b><br />
                Terrain : <b> {locationdetails.terrain} </b> <br />
                Surface_water : <b> {locationdetails.surface_water} </b> <br />
          
                </small>

              </div>
            </div>
          </div>
        </>
      )
    }
  }

  const location_tile = (locationdetails) => {
      if (locationdetails) {
          return locationdetails.films.map((item) => {
              const film_route = '/films/'+ item.id + '#top'
              return (
                  <>
                      <div className='location_p_c'><HashLink to={film_route}><img className='location_film' src={item.image_url} alt='film_poster'></img></HashLink><br /><center style={{color:'wheat'}}>{item.name}</center></div>
                      {/* <div className='location_p_c'><HashLink to={film_route}><img className='location_film' src={item.image_url} alt='film_poster'></img></HashLink><br /><center>{item.name}</center></div> */}
                  </>
              )
          })
      }
  }



  return (
    <>
      <div className='main'> {location_info(props)}</div>

      <div style={{ margin: '10px' }}>






            </div>

            <div className="location_tile main" id='location _page_location'>
                <h4 style={{ marginLeft: '20px', color:'#1daeed' }}>Appeared In </h4>
                <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                {location_tile(props.locationdetails)}
            </div>



    </>
  )
}

export default LocationComponent;