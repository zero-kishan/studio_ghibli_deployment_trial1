import React, { Component } from 'react';

import axios from 'axios';
import CharacterComponent from '../components/CharacterComponent';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import MyPlanComponent from '../components/MyPlanComponent'
import './Unimain.css'
import VideoComponent from '../components/VideoComponent'
// const orders_url = 'https://ghibli-json-server.herokuapp.com/characters';
const orders_url = "https://studio-ghibli-universe-backend.herokuapp.com/orders/history";



class MyPlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: '',
    }
  }

  async getorderdetails() {
    const { data: resp } = await axios.get(`${orders_url}`)
    this.setState({ order: resp })
  }
  render() {
    console.log(this.state, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>

        <MyPlanComponent orderdetails={this.state.order} />



      </>
    )
  }
  componentDidMount() {
    
    this.getorderdetails()
  }

}

export default MyPlan;