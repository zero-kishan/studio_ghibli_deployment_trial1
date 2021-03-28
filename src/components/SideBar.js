

import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './SideBar.css'

class SideBar extends React.Component {
  render() {
    return <div class="sidenav">
      <HashLink to="/home#top">Home<span className="sr-only">(current)</span></HashLink>
      <HashLink
        to="/home#Movies_heading"
      >The Films
            <span className="sr-only">(current)</span>
      </HashLink>
      <HashLink 
        to="/home#Characters_heading"
      >Characters
            <span className="sr-only">(current)</span>
      </HashLink>
      <HashLink 
        to="/home#Locations_heading"
      >Locations
            <span className="sr-only">(current)</span>
      </HashLink>
      <HashLink 
        to="/home#Vehicles_heading"
      >Vehicles
            <span className="sr-only">(current)</span>
      </HashLink>
      <a href="#about">Graphic Novels</a>

      <HashLink 
        to="/home#Televisions_heading"
      >TV-series
            <span className="sr-only">(current)</span>
      </HashLink>

      <HashLink 
        to="/home#StageProductions_heading"
      >Stage Productions
            <span className="sr-only">(current)</span>
      </HashLink>
      
      {/* <HashLink 
        to="/shopping#Videogames_heading"
      >Video Games
            <span className="sr-only">(current)</span>
      </HashLink> */}
      
      <a href="#contact">Exibitions</a>
      <a href="#contact">Pre-Ghibli</a>
      <a href="#contact">Coperative works</a>
      <a href="#contact">Distributive works</a>
      <a href="#contact">Contributive works</a>
      <a href="#contact">Significant achievements</a>
    </div>;
  }
}

export default SideBar;