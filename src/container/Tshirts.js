import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import TshirtComponent from '../components/TshirtComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const tshirt_url = 'https://ghibli-json-server.herokuapp.com/tshirt';


class Tshirt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tshirt: '',
      id: this.props.match.params.id
    }
  }

  async getTshirtDetails() {
    const { data: resp } = await axios.get(`${tshirt_url}/${this.props.match.params.id}`)
    this.setState({ tshirt: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <TshirtComponent tshirtdetails={this.state.tshirt} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getTshirtDetails()
  }

}

export default Tshirt;