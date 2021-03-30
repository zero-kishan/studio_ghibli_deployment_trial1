import React, { Component } from 'react';
import './WatchlistlistDisplay.css';
import { connect } from 'react-redux';
import { following_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';

//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";

class FollowingDisplay extends Component {
    handleSubmit = (following) => {
        this.props.dispatch(following_delete(following))
        // fetch(`${wishlist_url}/${wishlist.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // });
        alert("Removed from following!")
    }
    renderTable = ({ following }) => {
        if (following) {

            return following.map((item) => {


                const route = '/user/' + item.user_id + '#top'
                return (
                    <>
                        <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693', padding:'5px' }}>
                        <div className="row no-gutters">

                        {/* <div className="col-md-3">
                            <center><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></center>
                            </div> */}
                            


                            <div className="col-md-4" style={{paddingTop:'20px', color: 'black'}}>
                            <center><HashLink to={route}><h5 style={{color:'white'}} >{item.name}</h5></HashLink></center>
                            </div>
                            
                            
                            <div className="col-md-4" style={{paddingTop:'20px'}}>
                            <center><h6>{item.date}</h6></center>
                            </div>


                            <div className="col-md-4" style={{paddingTop:'5px'}}>
                            <center><button className="btn" onClick={() => { this.handleSubmit(item) }}><img alt='delete_bin' src="https://img.icons8.com/fluent/48/000000/filled-trash.png" /></button></center>
                            </div>   

                        </div></div>

                    </>
                )
            })
        }
    }

    render() {
        let object = (<div></div>)
        if (this.props.following) {
            object = (this.props.following.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h5 style={{color:'wheat'}}>Follow a watchlist from the community to make it a part of your Ghibli Universe!</h5>
                    </div>
                ) :
                (                <>
                    <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#1daeed', padding:'10px' }}>
                    <div className="row no-gutters">
                      
    
                        <div className="col-md-4">
    
    
                               <center>Name</center> 
    
                        </div>
    
                        <div className="col-md-4">
    
    
                                
                                <center>Date</center> 
    
                        </div>
    
                        <div className="col-md-4">
    
    
                        <center>Delete</center> 
    
                        </div>

                        </div>
                        
                    </div><div>
    
    {this.renderTable(this.props)}
    
    
    </div>
    </>)
        }

        return (
            <div className="container" id="following_display" style={{ paddingTop: '100px' }}>
                <h4 style={{color:'#1daeed'}} className='wishlist_heading'>{sessionStorage.getItem('name')}'s Followed Watchlist</h4>
                { object }
            </div >
            
        )
    }

}

export default connect()(FollowingDisplay);