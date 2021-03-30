import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeStageProductionGridDisplay = (props) => {
    return(
        <>
   


    <div className='container  main' id='StageProductions_heading'>
    <h2 style={{color:'#0f78af'}}>Stage Production</h2>
    <hr style={{ backgroundColor: '#687693', height: '0.02px' }}></hr>

<div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
  <div className="col-xs-5 col-sm-6 col-lg-3">
    <div ><img className='vehicle_banner' src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Princess_Mononoke_Japanese_poster.png/220px-Princess_Mononoke_Japanese_poster.png" alt='vehicle_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
      
    </div>

  </div>

  <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
    <p>Princess Mononoke </p>
    <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>

    <br />
    <small><p style={{color:'white'}}>
    In Muromachi Japan, an Emishi village is attacked by a demon. The last Emishi prince, Ashitaka, kills it before it reaches the village, but its corruption curses his right arm. The curse gives him superhuman strength, but will eventually spread through his body and kill him. The villagers discover that the demon was a boar god, Nago, corrupted by an iron ball lodged in his body. The village's wise woman tells Ashitaka that he may find a cure in the western lands Nago came from, but he cannot return to his homeland.
</p>
    </small>

  </div>
</div>
</div>
</>
    
    
    
    
    
    
    
    
    )
    
}


export default HomeStageProductionGridDisplay;