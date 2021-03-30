import React, { Component } from 'react';
import FollowingDisplay from '../components/FollowingDisplay';
import { following } from '../actions/actionfile';
import { connect } from 'react-redux';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import './Unimain.css'
//import axios from 'axios';
//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";

class Following extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         wishlist: ''
    //     }
    // }
    componentDidMount() {
        //const response = await axios.get(wishlist_url);
        this.props.dispatch(following());


        //this.setState({ wishlist: filtering });


        // this.setState({ wishlist: response.data })
        //console.log(response.data)
    }
    render() {
        if (sessionStorage.getItem('email') === null) {
            this.props.history.push('/')
        }
        let filtering='';
        if (this.props.following) {
            filtering = this.props.following.filter((item) => {
                return sessionStorage.getItem('email') === item.email
            })
        }
        return (
            <>
            <div className="container">
                <FollowingDisplay following={filtering} />
            </div></>
        )
    }

}

function mapStateToProps(state) {
    console.log(state.following)
    return {
        following: state.following
    }

}

export default connect(mapStateToProps)(Following);