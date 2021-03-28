import React, { Component } from 'react';
import './WatchlistlistDisplay.css';
import { connect } from 'react-redux';
import { wishlist_delete } from '../actions/actionfile';
import { HashLink } from 'react-router-hash-link';

//const wishlist_url = "https://ghibli-json-server.herokuapp.com/wishlist";


class WatchlistDisplay extends Component {
    handleSubmit = (wishlist) => {
        this.props.dispatch(wishlist_delete(wishlist))
        // fetch(`${wishlist_url}/${wishlist.id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        // });
        alert("Removed from wishlist!")
    }
    renderTable = ({ wishlist }) => {
        if (wishlist) {

            return wishlist.map((item) => {


                const route = '/films/' + item.movieid + '#top'
                return (
                    <>
                        <tr>
                            <td ><HashLink to={route}><img className='wishlist_film' alt="movie_poster" src={item.movieimage}></img></HashLink></td>
                            <td>{item.moviename}<br /><br /><button className="btn" style={{ filter: 'sepia()' }} onClick={() => { this.handleSubmit(item) }}><img alt='delete_bin' src="https://img.icons8.com/fluent/48/000000/filled-trash.png" /></button></td>
                            <td>{item.date}</td>
                        </tr>

                    </>

                )




            })



        }
    }

    render() {
        let object = (<div></div>)
        if (this.props.wishlist) {
            object = (this.props.wishlist.length === 0) ?
                (
                    <div className='empty_wishlist'>
                        <h4 >Add a movie to wishlist to make it a part of your Ghibli Universe!</h4>
                    </div>
                ) :
                (<table className="table table-responsive">

                    <thead>
                        <tr>

                            <th>Movie</th>
                            <th>Movie name</th>
                            <th>Date</th>
                        </tr>
                    </thead>


                    <tbody>

                        {this.renderTable(this.props)}


                    </tbody>
                </table>)
        }

        return (
            <div className="container" id="watchlist_display" style={{ paddingTop: '100px' }}>
                <h3 className='wishlist_heading'>{sessionStorage.getItem('name')}'s Ghibli Universe</h3>
                { object }
            </div >
            
            
            /* <table className="table table-responsive">

                    <thead>
                        <tr>

                            <th>Movie</th>
                            <th>Movie name</th>
                            <th>Date</th>
                        </tr>
                    </thead>


                    <tbody>

                        {this.renderTable(this.props)}


                    </tbody>
                </table> */
                
                
            

        )
    }

}

export default connect()(WatchlistDisplay);
