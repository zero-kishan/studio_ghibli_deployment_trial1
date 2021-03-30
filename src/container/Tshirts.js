import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shopping_wishlist } from '../actions/actionfile';
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
        if (item.email === sessionStorage.getItem('email') && item.name === this.state.tshirt.name) {
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
      
        <TshirtComponent tshirtdetails={this.state.tshirt} in_wishlist={in_wishlist} shopping_wishlist={shopping_wishlist} />



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getTshirtDetails()
  }

  



}

function mapStateToProps(state) {
  console.log(state.shopping_wishlist)
  return {
    shopping_wishlist: state.shopping_wishlist
  }

}


export default connect(mapStateToProps)(Tshirt);