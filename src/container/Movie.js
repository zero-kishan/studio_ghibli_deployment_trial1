import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { wishlist } from '../actions/actionfile';
import MovieComponent from '../components/MovieComponent';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
const filmsUrl = 'https://studio-ghibli-universe-backend.herokuapp.com/films/view';
//const wishlist_url = 'https://ghibli-json-server.herokuapp.com/wishlist';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: '',
      id: this.props.match.params.id,
      in_wishlist: false,
      wishlist_movie_id: ''
    }
  }

  async getMovieDetails() {
    const { data: resp } = await axios.get(`${filmsUrl}/${this.props.match.params.id}`)
    this.setState({ movie: resp })
    await this.props.dispatch(wishlist())

    console.log(this.props.wishlist)


    //axios.get(wishlist_url)

    // .then((response) => {


    //})
  }
  render() {
    console.log(this.state, 'inside render here')
    let in_wishlist = false;
    let wishlist = {};
    console.log(this.props.wishlist, 'inside render')
    console.log(this.state.movie[0], 'inside render')
    if (this.props.wishlist && this.state.movie[0]) {
      this.props.wishlist.map((item) => {
        if (item.email === sessionStorage.getItem('email') && item.moviename === this.state.movie[0].title) {
          in_wishlist = true;
          wishlist = item;
        }
      })
    }
    console.log(in_wishlist, 'inside render')
    console.log(wishlist, 'inside render')
    return (
      <>
      <Header />
      <SideBar/>
        {/* <Logout history={this.props.history} /> */}
        <MovieComponent moviedetails={this.state.movie} in_wishlist={in_wishlist} wishlist={wishlist} />
      </>
    )
  }

  componentDidMount() {
    this.getMovieDetails()
    // axios.get(`${filmsUrl}/${this.props.match.params.id}`)
    //   .then((response) => {
    //     this.setState({ movie: response.data })

    //   })

  }

}

function mapStateToProps(state) {
  console.log(state.wishlist)
  return {
    wishlist: state.wishlist
  }

}

export default connect(mapStateToProps)(Movie);