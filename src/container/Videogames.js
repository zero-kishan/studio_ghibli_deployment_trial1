import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shopping_wishlist } from '../actions/actionfile';
import axios from 'axios';
//import Logout from './Logout';
import VideogamesComponent from '../components/VideogamesComponent';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'


const videogames_url = 'https://studio-ghibli-universe-backend.herokuapp.com/videogame/view';


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
    await this.props.dispatch(shopping_wishlist())
    console.log(this.props.shopping_wishlist)
  }
  render() {
    console.log(this.state, 'inside render')


    console.log(this.state, 'inside render')
    let in_wishlist = false;
    let shopping_wishlist = {};
    console.log(this.props.shopping_wishlist, 'inside render')
    if (this.props.shopping_wishlist && this.state.videogames[0]) {
      this.props.shopping_wishlist.map((item) => {
        if (item.email === sessionStorage.getItem('email') && item.name === this.state.videogames[0].name) {
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
      
        <VideogamesComponent videogamesdetails={this.state.videogames[0]} in_wishlist={in_wishlist} shopping_wishlist={shopping_wishlist} />

      </>
    )
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    this.getVideogamesDetails()
  }

}


function mapStateToProps(state) {
  console.log(state.shopping_wishlist)
  return {
    shopping_wishlist: state.shopping_wishlist
  }

}

export default connect(mapStateToProps)(Videogames);
