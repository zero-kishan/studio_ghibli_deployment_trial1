import React, { Component } from 'react';
import ShoppingVideogamesGridDisplay from '../components/ShoppingVideogamesGridDisplay';
import AdminUpgradeRequestGridDisplay from '../components/AdminUpgradeRequestGridDisplay';
import AdminUserControlGridDisplay from '../components/AdminUserControlGridDisplay';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Unimain.css';
import Wishlist from "./Wishlist"
import Watchlist from "./Watchlist"



const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
class Shopping extends Component {
 
  




    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }


        return (
            <>
                <Header />
                <SideBar />

                <div className="row navbar sticky-top  main" style={{ textAlign: 'center', padding: '15px', backgroundColor: '#111', marginRight: '0px' }}>
                    <div className="col-sm-6 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/MyGhibliUniverse#watchlist_display"
                    ><h6>Films Watchlist</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-6 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/MyGhibliUniverse#shoppingwishlist"
                    ><h6>Shopping Wishlist</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    

                  
                </div>
                <div className="main"><Watchlist  /></div>
                


                



            </>
        )
    }

   
}
export default Shopping;