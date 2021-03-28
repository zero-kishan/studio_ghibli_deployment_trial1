import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';

const ShoppingPosterGridDisplay = (props) => {
    const display = (posterslist) => {
        if (posterslist) {
           

            return posterslist.map((item,index) => {
                const posterRoute = '/poster/' + item.id + '#top';
                    return (
                        < >
                            <div className="card mb-3 card shopping_p_c" style={{ maxWidth: '320px', backgroundColor: '#1daeed' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <HashLink to={posterRoute}><img className='card-img' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                        <HashLink to={posterRoute} className='btn btn-primary'> know more</HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    )
            })
        }
    }

    return (
<div className="Shopping_sub_containers main" id= 'poster_shopping'>
            <div className="shoppingcontainer" >
                <div className="shopping_grid">
                    {display(props.posterslist)}
                </div>
            </div>
        </div>
    )
}

export default ShoppingPosterGridDisplay;