import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeTVGridDisplay = (props) => {
    const display = (televisionslist) => {
        if (televisionslist) {
            const snippet=(televisionslist.length > 3) ?
            (
                <div >See all</div>
            ) :
            (
                <div ></div>
            );
            if(televisionslist.length === 0){
                    return (
                        <div id="television_first" className='movie_poster_container'>
                            <br/>
                            <div className="overlay">
                                Sorry; no matches found.
                            </div>
                           
                        </div>
                    )
            }
            return televisionslist.map((item,index) => {
                const movieRoute = '/televisions/' + item.id + '#top';
                if(index === 0){
                    return (
                        <div id="television_first" className='movie_poster_container'>
                            {snippet}
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.title}</center>
                           
                        </div>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
                            <HashLink to={movieRoute}><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                            <center>{item.title}</center>
                        </div>
                    )
                }
                
            })
        }
    }

    return (
        <div className="Home_sub_containers main">
            <div className="container-fluid" >
                <div className="movie_grid">
                    {display(props.televisionslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeTVGridDisplay;