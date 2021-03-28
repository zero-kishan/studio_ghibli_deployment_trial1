import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeLocationGridDisplay = (props) => {
    const display = (locationslist) => {
        if (locationslist) {
            const snippet=(locationslist.length > 3) ?
            (
                <div ></div>
            ) :
            (
                <div ></div>
            );
            if(locationslist.length === 0){
                    return (
                        
                        <div id="location_first" className='movie_poster_container'>
                            <br/>
                            <div className="overlay">
                                Sorry; no matches found.
                            </div>
                           
                        </div>
                    )
            }
            return locationslist.map((item,index) => {
                const movieRoute = '/locations/' + item.id + '#top';
                if(index === 0){
                    return (
                        <>
                        <div id="location_first" className='movie_poster_container'>
                            {snippet}
                            <center><HashLink to={movieRoute}><img className='movie_character' src={item.image_url[0]} alt='movie_character'></img><br /></HashLink></center>
                            <center>{item.name}</center>
                           
                        </div>
                        </>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
                            <center><HashLink to={movieRoute}><img className='movie_character' src={item.image_url[0]} alt='movie_character'></img><br /></HashLink></center>
                            <center>{item.name}</center>
                        </div>
                    )
                }
                
            })
        }
    }
    const alllocation = '/alllocations'+'#top';
    return (
        <div className="Home_sub_containers main">
        <HashLink to={alllocation}><div><h6 style={{textAlign:"right", color:"white"}}>See all</h6></div></HashLink>
            <div className="container-fluid" >
                <div className="movie_grid">
                    {display(props.locationslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeLocationGridDisplay;