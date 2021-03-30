import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shopping_wishlist } from '../actions/actionfile';
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
        if (item.email === sessionStorage.getItem('email') && item.name === this.state.poster.name) {
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
      
        <PosterComponent posterdetails={this.state.poster} in_wishlist={in_wishlist} shopping_wishlist={shopping_wishlist}/>



      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getPosterDetails()
  }

}

function mapStateToProps(state) {
  console.log(state.shopping_wishlist)
  return {
    shopping_wishlist: state.shopping_wishlist
  }

}


export default connect(mapStateToProps)(Poster);