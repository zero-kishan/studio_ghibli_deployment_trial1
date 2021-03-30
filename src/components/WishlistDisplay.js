import React, { Component } from 'react';
import './WatchlistlistDisplay.css';
import { connect } from 'react-redux';
import { shopping_wishlist_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';

//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";


class WishlistDisplay extends Component {
    handleSubmit = (shopping_wishlist) => {
        this.props.dispatch(shopping_wishlist_delete(shopping_wishlist))
        // fetch(`${wishlist_url}/${wishlist.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // });
        alert("Removed from wishlist!")
    }
    renderTable = ({ shopping_wishlist }) => {
        if (shopping_wishlist) {

            return shopping_wishlist.map((item) => {

                const route = '/' + item.shopping_id + '#top'
                return (
                    <>
                        <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693', padding:'5px' }}>
                        <div className="row no-gutters">

                        <div className="col-md-3">
                            <center><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.shopping_image}></img></HashLink></center>
                            </div>


                            <div className="col-md-3" style={{paddingTop:'80px'}}>
                            <center><h6>{item.name}</h6></center>
                            </div>

                            <div className="col-md-3" style={{paddingTop:'80px'}}>
                            <center><h6>{item.date}</h6></center>
                            </div>
                            
                            <div className="col-md-3" style={{paddingTop:'50px'}}>
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
        if (this.props.shopping_wishlist) {
            object = (this.props.shopping_wishlist.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h5 style={{color:'wheat'}} >Add an item to wishlist to make it a part of your Ghibli Universe!</h5>
                    </div>
                ) :
                (
                <>
                <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#1daeed', padding:'10px' }}>
                <div className="row no-gutters">
                  <div className="col-md-3">

                  <center>Item</center> 

                    </div>

                    <div className="col-md-3">


                           <center>Item name</center> 

                    </div>

                    <div className="col-md-3">


                            
                            <center>Date</center> 

                    </div>

                    <div className="col-md-3">


                    <center>Delete</center> 

                    </div>



                    </div>


                    
                </div><div>

{this.renderTable(this.props)}


</div>
</>
)
        }

        return (
            <div className="container" id="wishlist_display" style={{ paddingTop: '100px' }}>
                <h4 style={{color:'#1daeed'}} className='wishlist_heading'>{sessionStorage.getItem('name')}'s Shopping Wishlist</h4>
                { object }
            </div >
            
        )
    }

}

export default connect()(WishlistDisplay);
