import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';
import Logout from './Logout';
import HandleUserRequest from './HandleUserRequest';

const gurl = "https://studio-ghibli-universe-backend.herokuapp.com/orders/register"
const orders_url = "https://studio-ghibli-universe-backend.herokuapp.com/orders/history";


class Header extends Component {
  constructor() {
    super()

    this.state = {
      allow_button: true,
      orders:'',


    }
  }
  
  render() {
    let pending_check = false;
    if(this.state.orders){
      this.state.orders.map((item, index) => {
        if (item.email==sessionStorage.getItem('email') && item.status=="pending"){
          pending_check = true;
        }
      })
    }
    
    return (
      <nav className="navbar sticky-top navbar-expand navbar-dark main" style={{ backgroundColor: "#111" }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <HashLink className="nav-link" id="home-link" to="/home#top">Home<span className="sr-only">(current)</span></HashLink>
            </li>

            <li className="nav-item nav-item active" >
              <HashLink className="nav-link" id="home-link"
                to="/shopping#top"
              >Shopping
                <span className="sr-only">(current)</span>
              </HashLink>
            </li>

            <li className="nav-item nav-item active" >
              <HashLink className="nav-link" id="home-link"
                to="/myghibliuniverse#top"
              >My Ghibli Universe
                <span className="sr-only">(current)</span>
              </HashLink>
            </li>

            {
              sessionStorage.getItem('role') == 'admin' ?
                <li className="nav-item nav-item active" >
                  <HashLink className="nav-link" id="home-link"
                    to="/admin#top"
                  >Admin Dashboard
                  <span className="sr-only">(current)</span>
                  </HashLink>
                </li> :
                sessionStorage.getItem('role') == 'ghiblian' ?
                  <li className="nav-item nav-item active" >
                    <HashLink className="nav-link" id="home-link"
                      to="/myplan"
                    >My Plan
                  <span className="sr-only">(current)</span>
                    </HashLink>
                  </li> :
                  <li className="nav-item nav-item active" >
                    <HandleUserRequest pending_check={pending_check} />

                  </li>
            }


          </ul>


          <div style={{ padding: '5px' }}><Logout /></div>

          <HashLink to='/home#top'><img style={{ borderRadius: '5px' }} src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" width="100" height="46" id="header-image" className="d-inline-block align-bottom" alt="" loading="lazy" /></HashLink>

        </div>
      </nav>
    )
    
  }
  componentDidMount() {
    axios.get(orders_url)
      .then((response) => {
        this.setState({ orders: response.data });
      })
  }
  
}

export default Header;