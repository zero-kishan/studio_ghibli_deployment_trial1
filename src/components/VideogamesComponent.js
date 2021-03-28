import React, { Component } from 'react';
import './LocationComponent.css';
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';

const Videogames_info = ({videogamesdetails }) => {
  // console.log(props, "blu2")
  
  //   console.log(props, "blu3")


    return (
      <>
        <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
          <div className="col-xs-5 col-sm-6 col-lg-3">
            <img className='location_banner' src={videogamesdetails.image_url} alt='Videogames_poster' style={{ border: '3px solid #1daeed ' }}></img></div>
            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
              <h2>{videogamesdetails.name}</h2><small>(A STUDIO GHIBLI PRODUCT)</small><br/><br/><br/><a href={videogamesdetails.merch_link} className="btn btn-primary">Buy Now</a></div>
            </div>
      </>
    )
    
  
  // console.log("props")
}
const VideogamesComponent = (props) => {

  console.log(props, "props passed blu")
  return (
    <>
      <div className='main'> {Videogames_info(props)}</div>

    </>
  )
}

export default VideogamesComponent;