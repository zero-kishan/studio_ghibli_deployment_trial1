import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import LocationComponent from '../components/LocationComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const location_url = 'https://ghibli-json-server.herokuapp.com/locations';


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      id: this.props.match.params.id
    }
  }

  async getLocationDetails() {
    const { data: resp } = await axios.get(`${location_url}/${this.props.match.params.id}`)
    this.setState({ location: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>        {/* <Logout history={this.props.history} /> */}
        <LocationComponent locationdetails={this.state.location} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getLocationDetails()
  }

}

export default Location;