import React, { Component } from 'react';

import axios from 'axios';
//import Logout from './Logout';
import AccessoriesComponent from '../components/AccessoriesComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const accessories_url = 'https://ghibli-json-server.herokuapp.com/accessories';


class Accessories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accessories: '',
      id: this.props.match.params.id
    }
  }

  async getAccessoriesDetails() {
    const { data: resp } = await axios.get(`${accessories_url}/${this.props.match.params.id}`)
    this.setState({ accessories: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
      
        <AccessoriesComponent accessoriesdetails={this.state.accessories} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getAccessoriesDetails()
  }

}

export default Accessories;