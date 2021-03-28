import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import VideogamesComponent from '../components/VideogamesComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const videogames_url = 'https://ghibli-json-server.herokuapp.com/videogames';


class Videogames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videogames: '',
      id: this.props.match.params.id
    }
  }

  async getVideogamesDetails() {
    const { data: resp } = await axios.get(`${videogames_url}/${this.props.match.params.id}`)
    this.setState({ videogames: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <VideogamesComponent videogamesdetails={this.state.videogames} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getVideogamesDetails()
  }

}

export default Videogames;