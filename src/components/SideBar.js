

import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './SideBar.css'

class SideBar extends React.Component {

  opennew1 = () => {
    console.log('this is:', this);
    window.open('https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works#Pre-Ghibli', '_blank')
  }

  opennew2 = () => {
    console.log('this is:', this);
    window.open('https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works#Significant_achievements', '_blank')
  }

  opennew3 = () => {
    console.log('this is:', this);
    window.open('https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works#Cooperative_works', '_blank')
  }

  opennew4 = () => {
    console.log('this is:', this);
    window.open('https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works#Contributive_works', '_blank')
  }


  opennew5 = () => {
    console.log('this is:', this);
    window.open('https://en.wikipedia.org/wiki/List_of_Studio_Ghibli_works#Distributive_works', '_blank')
  }
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
      
      <HashLink 
        to="/home#Exhibition_heading"
      >Exhibitions
            <span className="sr-only">(current)</span>
      </HashLink>

      

      
      <h4 onClick={this.opennew1} >Pre-Ghibli <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></h4>

      <h4 onClick={this.opennew2} >Significant achievements <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></h4>

      <h4 onClick={this.opennew3} >Coperative works <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></h4>

      <h4 onClick={this.opennew4} >Contributive works <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></h4>

      <h4 onClick={this.opennew5} >Distributive works <img src="https://img.icons8.com/officexs/16/000000/external-link.png"/></h4>

      


      
    </div>;
  }
}

export default SideBar;