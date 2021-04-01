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
import Following from './Following';



const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
const user_delete_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/delete';

class Shopping extends Component {



    handledeactivate = () => {
        alert('account deactivated')
        fetch(`${user_delete_url}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({ email: sessionStorage.getItem('email') })
        })
        localStorage.removeItem('userGhibli')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('role')
        localStorage.setItem("isloggedinGhibli", false);
        this.props.history.push('/')

    }






    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }


        return (
            <>
                <Header />
                <SideBar />
                <div className='row main' style={{ padding: '50px' }} >
                    <div className='col-sm-9'>
                        <h2 style={{ color: '#1daeed' }} className='wishlist_heading main'>{sessionStorage.getItem('name')}'s Ghibli Universe</h2>
                    </div>

                    <div className='col-sm-3' style={{ textAlign: 'right' }} onClick={this.handledeactivate}>
                        <h3><img style={{ paddingRight: '40px' }} src="https://img.icons8.com/ultraviolet/40/000000/remove-user-male.png" /></h3><h6 style={{ fontSize: '12px' }}>deactivate account</h6>
                    </div>

                </div>


                <div className="row navbar sticky-top  main" style={{ textAlign: 'center', padding: '15px', backgroundColor: '#111', marginRight: '0px' }}>
                    <div className="col-sm-4 movie_page_navigation">
                        <HashLink className="movie_categories_link"
                            to="/MyGhibliUniverse#watchlist_display"
                        ><h6>Films Watchlist</h6>
                            <span className="sr-only">(current)</span>
                        </HashLink>
                    </div>

                    <div className="col-sm-4 movie_page_navigation">
                        <HashLink className="movie_categories_link"
                            to="/MyGhibliUniverse#wishlist_display"
                        ><h6>Shopping Wishlist</h6>
                            <span className="sr-only">(current)</span>
                        </HashLink>
                    </div>
                    <div className="col-sm-4 movie_page_navigation">
                        <HashLink className="movie_categories_link"
                            to="/MyGhibliUniverse#following_display"
                        ><h6>Followed Watchlist</h6>
                            <span className="sr-only">(current)</span>
                        </HashLink>
                    </div>

                </div>


                <div className=" main"><Watchlist /></div>



                <div className=" main"><Wishlist /></div>

                <div className=" main"><Following /></div>



            </>
        )
    }


}
export default Shopping;