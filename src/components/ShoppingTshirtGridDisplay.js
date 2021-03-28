import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';

import { HashLink } from 'react-router-hash-link';

const ShoppingTshirtGridDisplay = (props) => {
    const display = (tshirtslist) => {
        if (tshirtslist) {
           

            return tshirtslist.map((item,index) => {
                const tshirtRoute = '/tshirt/' + item.id + '#top';
                    return (
                        < >
                            <div className="card mb-3 card shopping_p_c" style={{ maxWidth: '320px', backgroundColor: '#1daeed' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                <HashLink to={tshirtRoute}><img className='card-img' src={item.image_url} alt='movie_poster'></img><br /></HashLink>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">


                                        <p className="card-text" style={{ textAlign: 'left' }}><small>{item.name}</small></p>
                                        <HashLink to={tshirtRoute} className='btn btn-primary'> know more</HashLink>
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
<div className="Shopping_sub_containers main" id= 'Tshirt_shopping'>
            <div className="shoppingcontainer" >
                <div className="shopping_grid">
                    {display(props.tshirtslist)}
                </div>
            </div>
        </div>
    )
}

export default ShoppingTshirtGridDisplay;