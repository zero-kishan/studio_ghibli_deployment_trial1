import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wishlist_add, wishlist_delete } from '../actions/actionfile';
import './MovieComponent.css';
import VideoComponent from './VideoComponent'
import { HashLink } from 'react-router-hash-link';
//const wishlist_url = 'https://ghibli-json-server.herokuapp.com/wishlist';

class MovieComponent extends Component {
    handleSubmit = () => {

        if (this.props.in_wishlist === true) {
            this.props.dispatch(wishlist_delete(this.props.wishlist))
            alert("Removed from watchlist!")
        }
        else {
            this.props.dispatch(wishlist_add({
                moviename: this.props.moviedetails[0].title,
                movieid: this.props.moviedetails[0].id,
                movieimage: this.props.moviedetails[0].image_url,
                email: sessionStorage.getItem('email'),
                username: sessionStorage.getItem('name'),
                date: new Date().toDateString()
            }))

            alert("Added to watchlist!")
        }

    }


    movie_info = ({ moviedetails }) => {
        if (moviedetails) {
            const object = (this.props.in_wishlist === false) ?
                (
                    <div > <img alt='wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/officel/80/000000/like--v2.png"/></div>
                ) :
                (
                    <div > <img alt='remove_wishlist' onClick={this.handleSubmit} src="https://img.icons8.com/office/80/000000/like--v1.png"/></div>
                );

            return (
                <>
                    <div className='backgroundWall' style={{ backgroundImage: `url(${moviedetails[0].back_wall})` }} ></div>

                    <VideoComponent name={moviedetails[0].title} thumbnail={moviedetails[0].image_url} video={moviedetails[0].trailer_url} movie={moviedetails[0].video_url} />





                    <div id="movie_page_navbar" className='container'>

                        <div className="row " style={{ margin: '80px 0px 80px 0px' }}>
                            <div className="col-xs-5 col-sm-6 col-lg-3">
                                <div ><img className='movie_banner' src={moviedetails[0].image_url} alt='movie_poster' style={{ border: '3px solid #1daeed ' }}></img><br />
                                    <div style={{ textAlign: 'left' }}>{moviedetails[0].title}</div>
                                </div>

                            </div>

                            <div className="col-xs-7 col-sm-6 col-lg-9" style={{ marginTop: '20px' }}>
                                <p>Directed by <b>{moviedetails[0].director} </b></p>
                                <hr style={{ backgroundColor: '#687693', height: '0.01px' }}></hr>
                                <div> {moviedetails[0].description}</div>
                                <br />
                                <small>
                                    Year of Production : <b> {moviedetails[0].release_date} </b>
                                Rotten Tomatoes score : <b> {moviedetails[0].rt_score} </b> <br />
                                Producer : <b> {moviedetails[0].producer} </b>
                                </small>
                                {object}
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    character_tile = (moviedetails) => {
        if (moviedetails) {
            return moviedetails[0].char.map((item) => {
                const characterRoute = '/characters/' + item.id + '#top';
                return (
                    <>

                        <div className='movie_p_c '><HashLink to={characterRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center style={{color:'wheat'}}>{item.name}</center></div>


                    </>
                )
            })
        }
    }
    location_tile = (moviedetails) => {
        if (moviedetails) {
            return moviedetails[0].loc.map((item) => {
                const locationRoute = '/locations/' + item.id + '#top';
                return (
                    <>
                        <div className='movie_p_c'><HashLink to={locationRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center style={{color:'wheat'}}>{item.name}</center></div>

                    </>
                )
            })
        }
    }

    vehicle_tile = (moviedetails) => {
        if (moviedetails) {
            if (moviedetails[0].veh.length > 0) {
                return moviedetails[0].veh.map((item) => {
                    const vehicleRoute = '/vehicles/' + item.id + '#top';
                    return (
                        <>
                            <div className='movie_p_c'><HashLink to={vehicleRoute}><img className='movie_character' src={item.image_url} alt='movie_poster'></img></HashLink><br /><center style={{color:'wheat'}}>{item.name}</center></div>

                        </>
                    )
                })
            }

        }
    }
    merch = (moviedetails) => {
        if (moviedetails) {
            return moviedetails[0].video_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#1daeed' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    collectables = (moviedetails) => {
        if (moviedetails) {
            return moviedetails[0].merch_buy.map((item) => {
                return (
                    <>
                        <div className="card mb-3 card movie_p_c" style={{ maxWidth: '370px', backgroundColor: '#1daeed' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.image_url} className="card-img" alt="product_image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small><b>{item.name}</b></small></p>
                                        <a href={item.merch_link} className="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }
    render() {
        console.log(this.props.moviedetails, 'moviedetails')
        return (
            <>
                <div className='main'>
                    <div >{this.movie_info(this.props)}</div>

                    {/* <div style={{ margin: '10px' }}> */}


                        <div className="row navbar sticky-top" style={{ textAlign: 'center', padding: '10px', backgroundColor: '#111' }}>
                            <div className="col-sm-2 movie_page_navigation"><a className="movie_categories_link" href="#movie_page_character" ><h6>Characters</h6></a ></div>
                            <div className="col-sm-2 movie_page_navigation"><a className="movie_categories_link" href="#movie_page_location"><h6>Locations</h6></a ></div>
                            <div className="col-sm-2 movie_page_navigation"><a className="movie_categories_link" href="#movie_page_vehicle"><h6>Vehicles</h6></a ></div>
                            <div className="col-sm-2 movie_page_navigation"><a className="movie_categories_link" href="#officialprdct"><h6>Official Products</h6></a ></div>
                            <div className="col-sm-2 movie_page_navigation"><a className="movie_categories_link" href="#collectables"><h6>Collectables</h6></a ></div>

                        {/* </div> */}
                    </div>


                    <h4 id='movie_page_character' style={{ marginLeft: '20px', paddingTop: '80px', color:'#1daeed' }}>Characters</h4>
                    <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                    <div className="character_tile scrollmenu" >
                        {this.character_tile(this.props.moviedetails)}

                    </div><br />
                    {/* <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#687693', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center> */}

                    <div className="character_tile" >
                        <h4 id='movie_page_location' style={{ marginLeft: '20px', paddingTop: '80px', color:'#1daeed' }}>Locations</h4>
                        <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                        {this.location_tile(this.props.moviedetails)}
                        {/* <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#687693', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center> */}
                    </div>

                    <div className="character_tile" id='movie_page_vehicle'>
                        <h4 style={{ marginLeft: '20px', paddingTop: '80px', color:'#1daeed' }}>Vehicles</h4>
                        <hr style={{ backgroundColor: '#687693', height: '2px', marginLeft: '10px', marginRight: '10px' }}></hr>
                        {this.vehicle_tile(this.props.moviedetails)}
                        {/* <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#687693', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center> */}
                    </div>


                    <div className="video_links" id="officialprdct" style={{ marginTop: '20px', paddingBottom: '30px', paddingTop: '80px', backgroundColor: '#687693' }}>
                        <h4 style={{ backgroundColor: '#687693', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Official Products</h4>
                        <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                        {this.merch(this.props.moviedetails)}
                        {/* <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#687693', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center> */}
                    </div>

                    <div className="video_links" id="collectables" style={{ paddingBottom: '30px', paddingTop: '80px', backgroundColor: '#687693' }}>
                        <h4 style={{ backgroundColor: '#687693', color: '#cccdb4', padding: '30px 0px 0px 20px' }}>Collectables</h4>
                        <hr style={{ backgroundColor: '#cccdb4', height: '1px', marginLeft: '10px', marginRight: '10px' }}></hr>
                        {this.collectables(this.props.moviedetails)}
                        {/* <center><a class="movie_categories_link" href="#movie_page_navbar"><button type="button" style={{ backgroundColor: '#687693', color: '#cccdb4', fontFamily: 'Times New Roman' }} class="btn">Back <img alt="up" src="https://img.icons8.com/plumpy/24/000000/circled-up-2.png" /> to categories</button></a ></center> */}
                    </div>
                </div>
            </>

        )
    }

    componentDidMount() {
        // this.props.dispatch(latestNews())
        // this.props.dispatch(articleNews())
        // this.props.dispatch(galleryNews())
    }

}

// function mapStateToProps(state){
//     return{
//         wishlist: state.wishlist
//     }
// }

export default connect()(MovieComponent);