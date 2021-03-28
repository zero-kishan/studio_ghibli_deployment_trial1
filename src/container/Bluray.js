import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shopping_wishlist } from '../actions/actionfile';
import axios from 'axios';
//import Logout from './Logout';
//shopping_
import BlurayComponent from '../components/BlurayComponent';
import VideoComponent from '../components/VideoComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const blu_ray_url = 'https://ghibli-json-server.herokuapp.com/blu_ray';


class Bluray extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blu_ray: '',
      id: this.props.match.params.id
    }
  }

  async getBlurayDetails() {
    const { data: resp } = await axios.get(`${blu_ray_url}/${this.props.match.params.id}`)
    this.setState({ blu_ray: resp })
    await this.props.dispatch(shopping_wishlist())
    console.log(this.props.shopping_wishlist)
  }
  render() {
    console.log(this.state, 'inside render')

    let in_wishlist = false;
    let shopping_wishlist = {};
    console.log(this.props.shopping_wishlist, 'inside render')
    if (this.props.shopping_wishlist) {
      this.props.shopping_wishlist.map((item) => {
        if (item.email === sessionStorage.getItem('email') && item.name === this.state.blu_ray.name) {
          in_wishlist = true;
          shopping_wishlist = item;
        }
      })
    }
    console.log(in_wishlist, 'inside render');
    console.log(shopping_wishlist, 'inside render');

    return (
      <>
      <Header />
      <SideBar/>
      
        <BlurayComponent blu_raydetails={this.state.blu_ray} in_wishlist={in_wishlist} shopping_wishlist={shopping_wishlist} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getBlurayDetails()
  }

}

function mapStateToProps(state) {
  console.log(state.shopping_wishlist)
  return {
    shopping_wishlist: state.shopping_wishlist
  }

}

export default connect(mapStateToProps)(Bluray);