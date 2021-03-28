import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import { HashLink } from 'react-router-hash-link';

const HomeCharacterGridDisplay = (props) => {
    const display = (characterslist) => {
        if (characterslist) {
            const snippet=(characterslist.length > 3) ?
            (
                <div></div>
            ) :
            (
                <div ></div>
            );
            if(characterslist.length === 0){
                return (
                    <div id="character_first" className='movie_poster_container'>
                       
                        <br/>
                        <div className="overlay">
                            Sorry; no matches found.
                        </div>
                    </div>
                )
            }
            return characterslist.map((item,index) => {
                const movieRoute ='/characters/'+'#top';
                
                if(index === 0){
                    return (
                        <>
                        <div id="character_first" className='movie_poster_container'>
                            {snippet}
                            <center><HashLink to={movieRoute}><img className='movie_character' src={item.image_url} alt='movie_character'></img><br /></HashLink></center>
                            <center>{item.name}</center>   
                        </div>
                        </>
                    )
                }
                else{
                    return (
                        <div className='movie_poster_container'>
    
    <center><HashLink to={movieRoute}><img className='movie_character' src={item.image_url} alt='movie_character'></img><br /></HashLink></center>
                            <center>{item.name}</center>
                        </div>
                    )
                }
                
            })
        }
    }
    
    return (
        <div className="Home_sub_containers_all main">  
            <div className="container-fluid" >

                <div className="movie_grid_all">
                    {display(props.characterslist)}
                </div>
            </div>
        </div>
    )
}

export default HomeCharacterGridDisplay;