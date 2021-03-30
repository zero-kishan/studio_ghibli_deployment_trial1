import React, { Component } from 'react';
import './LocationComponent.css';
import BottomCarousel from './BottomCarousel'
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import { shopping_wishlist_add, shopping_wishlist_delete } from '../actions/actionfile';
class VideogamesComponent extends Component {



  handleSubmit = () => {

    if (this.props.in_wishlist === true) {
      this.props.dispatch(shopping_wishlist_delete(this.props.shopping_wishlist))
      alert("Removed from wishlist!")
    }
    else {
      this.props.dispatch(shopping_wishlist_add({
        id: Math.floor(Math.random() * 10000),
        name: this.props.videogamesdetails.name,
        shopping_id: 'videogames/' + this.props.videogamesdetails.id,
        shopping_image: this.props.videogamesdetails.image_url,
        email: sessionStorage.getItem('email'),
        username: sessionStorage.getItem('name'),
        date: new Date().toDateString()
      }))

      alert("Added to wishlist!")
    }

  }



  Videogames_info = ({ videogamesdetails }) => {
    // console.log(props, "blu2")

    //   console.log(props, "blu3")

    if (videogamesdetails) {

      const object = (this.props.in_wishlist === false) ?
        (
          <div > <img alt='wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/officel/80/000000/like--v2.png" /></div>
        ) :
        (
          <div > <img alt='remove_wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/office/80/000000/like--v1.png" /></div>
        );

      return (
        <>
          <div className="row " style={{ margin: '80px 0px 80px 0px', color: '#1daeed' }}>
            <div className="col-xs-5 col-sm-6 col-lg-3">
              <img className='location_banner' src={videogamesdetails.image_url} alt='Videogames_poster' style={{ border: '3px solid #1daeed ' }}></img></div>
            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
              <h2>{videogamesdetails.name}</h2><small>(A STUDIO GHIBLI PRODUCT)</small><br /><br /><br /><a href={videogamesdetails.merch_link} className="btn btn-primary">Buy Now</a><br /> <br /> {object}</div>
          </div>
        </>
      )
      
    }



    // console.log("props")
  }
  render() {
    console.log(this.props, "props passed blu")
    return (
      <>
        <div className='main'> {this.Videogames_info(this.props)}</div>

      </>
    )
  }

}

export default connect()(VideogamesComponent);
