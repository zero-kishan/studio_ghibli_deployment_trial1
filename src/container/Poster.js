import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import PosterComponent from '../components/PosterComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const poster_url = 'https://ghibli-json-server.herokuapp.com/poster';


class Poster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      poster: '',
      id: this.props.match.params.id
    }
  }

  async getPosterDetails() {
    const { data: resp } = await axios.get(`${poster_url}/${this.props.match.params.id}`)
    this.setState({ poster: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <PosterComponent posterdetails={this.state.poster} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getPosterDetails()
  }

}

export default Poster;