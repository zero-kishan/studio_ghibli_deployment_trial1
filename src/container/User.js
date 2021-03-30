import React, { Component } from 'react';
import UserComponent from '../components/UserComponent'
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { following } from '../actions/actionfile';
import axios from 'axios';
import './Unimain.css';

const user_info = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/userInfo';
const films_playlist_url = "https://ghibli-json-server.herokuapp.com/films_playlist";

class User extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      error: '',
      watchlist: ''
    }
  }



  render() {
    let filtering = ''
    if (sessionStorage.getItem('email') == null) {
      this.props.history.push('/')
    }
    console.log(this.state, 'hello')

    if (this.state.watchlist) {
      filtering = this.state.watchlist.filter((item, index) => {
        return this.state.user.email === item.email
      })
    }
    console.log(this.state, 'inside render')
    let in_wishlist = false;
    let following = {};
    console.log(this.props.following, 'inside render')
    if (this.props.following) {
      this.props.following.map((item) => {
        if (item.email === sessionStorage.getItem('email') && item.name === this.state.user.name) {
          in_wishlist = true;
          following = item;
        }
      })
    }
    console.log(in_wishlist, 'inside render');
    console.log(following, 'inside render');


    return (
      <>
        <Header />
        <SideBar />

        <UserComponent watchlist={filtering} username={this.state.user.name} id={this.state.user._id} in_wishlist={in_wishlist} following={following}/>

      </>
    )
  }


  async getUserInfo() {
    await fetch(`${user_info}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({ _id: this.props.match.params.id })
    })

      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data })


      })
      .catch((err) => {
        this.setState({ error: err })
      });
    await axios.get(films_playlist_url)
      .then((response) => {
        this.setState({ watchlist: response.data })
      })
    await this.props.dispatch(following())
    console.log(this.props.following)

  };

  componentDidMount() {
    this.getUserInfo();
  }
}

function mapStateToProps(state) {
  console.log(state.following)
  return {
    following: state.following
  }

}

export default connect(mapStateToProps)(User);