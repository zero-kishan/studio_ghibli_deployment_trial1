import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeExhibition = (props) => {
    return(
        <>
   


    <div className='container  main' id='Exhibition_heading'>
    <h2 style={{color:'#0f78af'}}>Exhibitions</h2>
    <hr style={{ backgroundColor: '#687693', height: '0.02px' }}></hr>

<div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
  <div className="col-xs-5 col-sm-6 col-lg-3">
    <div ><img className='vehicle_banner' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Museum_of_Contemporary_Art_Tokyo_2009.jpg/480px-Museum_of_Contemporary_Art_Tokyo_2009.jpg" alt='vehicle_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
      
    </div>

  </div>

  <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
    <p>List of Exhibitions </p>
    <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>

    <br />
    <small><p style={{color:'white'}}>
    A selection of layout designs for animated productions was exhibited in the Studio Ghibli Layout Designs: Understanding the Secrets of Takahata and Miyazaki Animation exhibition tour, which started in the Museum of Contemporary Art Tokyo (July 28, 2008 to September 28, 2008) and subsequently travelled to different museums throughout Japan and Asia, concluding its tour of Japan in the Fukuoka Asian Art Museum (October 12, 2013 to January 26, 2014) and its tour of Asia in the Hong Kong Heritage Museum (May 14, 2014 to August 31, 2014). Between October 4, 2014 and March 1, 2015 the layout designs were exhibited at Art Ludique in Paris. The exhibition catalogues contain annotated reproductions of the displayed artwork
</p>
    </small>

  </div>
</div>
</div>
</>
    
    
    
    
    
    
    
    
    )
    
}


export default HomeExhibition;