import React, { Component } from 'react';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const AllMovieComponent = (props) => {
    
    const display = (filmslist) => {
        
        if (filmslist) {
            const snippet=(filmslist.length > 3) ?
            (
                <div></div>
            ) :
            (
                <div ></div>
            );
            if (filmslist.length === 0) {
                return (
                    <div id="movie_first" className='movie_poster_container'>
                        <br />
                        <div className="overlay">
                            Sorry; no matches found. 
                        </div>
                    </div>
                )
            }
            return filmslist.map((item, index) => {
                

                const movieRoute = '/films/' + item.id + '#top';
                
                    if (index === 0) {
                        return (
                            <>
                                
                                <div id="movie_first" className='movie_poster_container'>
                                {snippet}
                                    <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img></HashLink>
                                    <br /><div >
                                    <h6 style={{fontSize:'10px'}}><center>{item.title}</center></h6>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    else {
                        return (
                            <div className='movie_poster_container' >
                            
                                <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                                <div >
                                <h6 style={{fontSize:'10px'}}><center>{item.title}</center></h6>
                            </div></div>
                        )
                    }
                    
                

            })
        }

    }

    return (
        <div className="Home_sub_containers_all main">
            <div className="container-fluid"  >
               

                <div className="movie_grid_all ">
                    {display(props.filmslist)}
                </div>
            </div>
        </div>
    )
}

export default AllMovieComponent;