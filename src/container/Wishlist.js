import React, { Component } from 'react';
import WishlistDisplay from '../components/WishlistDisplay';
import { shopping_wishlist } from '../actions/actionfile';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css';
//import axios from 'axios';
//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";

class Wishlist extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         wishlist: ''
    //     }
    // }
    componentDidMount() {
        //const response = await axios.get(wishlist_url);
        this.props.dispatch(shopping_wishlist());


        //this.setState({ wishlist: filtering });


        // this.setState({ wishlist: response.data })
        //console.log(response.data)
    }
    render() {
        if (sessionStorage.getItem('email') === null) {
            this.props.history.push('/')
        }
        let filtering='';
        if (this.props.shopping_wishlist) {
            filtering = this.props.shopping_wishlist.filter((item) => {
                return sessionStorage.getItem('email') === item.email
            })
        }
        return (
            <>
            <div className="container">
                <WishlistDisplay shopping_wishlist={filtering} />
            </div></>
        )
    }

}

function mapStateToProps(state) {
    console.log(state.shopping_wishlist)
    return {
        shopping_wishlist: state.shopping_wishlist
    }

}

export default connect(mapStateToProps)(Wishlist);