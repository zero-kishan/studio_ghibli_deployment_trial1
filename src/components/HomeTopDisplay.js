import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import Slider from "react-slick";
import { HashLink } from 'react-router-hash-link';

var settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HomeTopDisplay = (props) => {

    const slick = (filmslist) => {
        if (filmslist) {
            
            return filmslist.map((item) => {
                const movieRoute = '/films/' + item.id + '#top';
                return (
                    
                    <HashLink to={movieRoute}>
                        <div class='slider backgroundWall' style={{backgroundImage: `url(${item.back_wall})` }} >
                            <h3 id="HomeSlide1" >{item.title}</h3>
                            <br />
                            {/* <h4 id="HomeSlide2">Slide to see matching movie images</h4>
                            <br /> */}
                            <h6 id='Brought_to_you_by'>Brought to you by:</h6>
                            <br />
                            <div className='PresentedBy1'>
                                <img id="HomeImage1" src='./826333.png' alt='PresentedBy' />
                            </div>
                            <div className='PresentedBy2'>
                                <img id="HomeImage2" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png' alt='PresentedBy' />

                            </div>
                            <div id='HomeLogo'>
                                <img id="HomeImage3"  src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png' style={{height:'100px', width:'240px'}} alt='logo'  />
                                <p>Studio Ghibli Universe</p>
                            </div>
                        </div>
                        </HashLink>
                )
            })
        }
    }
    return (
        <>








        
            <center class='slider_container main'>
            <div className="container-fluid">
                <Slider {...settings}>
                    {slick(props.filmslist)}
                </Slider>
                </div>
            </center>
            
            <div className='HomeDescription main'>
                <center>
                <br/>
                    <h2>Studio Ghibli Universe</h2>
                    <h6>
                        One of the most acclaimed studios in the world.
                    </h6>
                    
                    <h6>
                        Studio Ghibli is the home of some of the most revered and beloved animated works to have ever graced the screen.
                    </h6>
                    

                    <h6>
                        The Studio Ghibli catalogue is now available to buy along with all it's merchandise of characters, vehicles, and iconic locations.
                    </h6>

                    <br/>
                </center>
            </div>
            <br />
        </>
    )
}

export default HomeTopDisplay;