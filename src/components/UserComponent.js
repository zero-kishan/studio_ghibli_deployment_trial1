import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';
import { connect } from 'react-redux';
import { following_add, following_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';


class UserComponent extends Component {


  handleSubmit = () => {

    if (this.props.in_wishlist === true) {
      this.props.dispatch(following_delete(this.props.following))
      alert("Removed from following!")
    }
    else {
      this.props.dispatch(following_add({
        id: Math.floor(Math.random() * 10000),
        name: this.props.username,
        user_id: this.props.id,
        email: sessionStorage.getItem('email'),
        username: sessionStorage.getItem('name'),
        date: new Date().toDateString()
      }))

      alert("Added to following!")
    }

  }


  display = (watchlist) => {

    if (watchlist) {
      console.log(watchlist, "user")


      

      if (watchlist) {

        return watchlist.map((item, index) => {
          const route = '/films/' + item.movieid + '#top';

          return (


            <>
            
              <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693', padding: '5px' }}>
                <div className="row no-gutters">

                  <div className="col-md-6" style={{ padding: '80px 0px 0px 20px' }}>
                    <h4>{item.moviename}</h4>
                  </div>

                  <div className="col-md-6">
                    <center><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></HashLink></center>
                  </div>

                </div></div>

            </>



          )
        })
      }
    }
  }
  render(){
    const object = (this.props.in_wishlist === false) ?
        (
          <div > <img style={{filter:' sepia()'}} alt='wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/material-outlined/96/000000/like--v1.png"/></div>
          
        ) :
        (
          <div > <img  alt='remove_wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/material/96/000000/like--v1.png" /></div>
        );
    return (
      <div className="Shopping_sub_containers main" id='user_shopping'>
        <div className="shoppingcontainer" >
          <div className="shopping_grid">
            {console.log(this.props.user_email, "user")}
  
            <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#0f78af', padding: '5px' }}>
              <div className="row no-gutters">
  
                <div className="col-md-9" >
                  
                    {this.props.username ? <h2 style={{ padding: '20px', color: 'black' }}>{this.props.username}'s watchlist </h2> : null}
                  
                  </div>

                  <div className="col-md-3" >
                  
                  {object}
                  
                  </div>


                  
                
  
              </div></div>
           
              {this.props.watchlist.length > 0 ?
                this.display(this.props.watchlist):<div><h2 style={{color:'wheat', padding:'160px 50px 160px 50px'}}>{this.props.username}'s watchlist is empty!!!</h2></div>
              }
            
            </div>
        </div>
        
      </div>
    )
  }
  


}

export default connect()(UserComponent);