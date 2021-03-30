import React from 'react'
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import {Route} from 'react-router-dom'
import Home from './container/Home'
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';

import Movie from './container/Movie';
import Character from './container/Character';
import Location from './container/Location';
import Vehicle from './container/Vehicle';
import MyGhibliUniverse from './container/MyGhibliUniverse';
import SideBar from './components/SideBar';
import Shopping from './container/Shopping'

import Bluray from './container/Bluray';
import Dvd from './container/Dvd';
import Accessories from './container/Accessories';
import Poster from './container/Poster';
import Tshirt from './container/Tshirts';
import Videogames from './container/Videogames';
import AllMovie from './container/AllMovie';
import AllCharacter from './container/AllCharacter';
import AllLocation from './container/AllLocation';
import Community from './container/Community'

import Admin from './container/Admin'
import MyPlan from './container/MyPlan';
import User from './container/User';


const Routing = () => {
    return (
        <BrowserRouter>
          
          

          <Route exact path='/' component={SignupComponent} />
          <Route path='/logincomponent' component={LoginComponent}/>
          <Route path="/home" component={Home}/>
          <Route path="/films/:id" component={Movie}/>
          <Route path="/characters/:id" component={Character}/>
          <Route path="/locations/:id" component={Location}/>
          <Route path="/vehicles/:id" component={Vehicle}/>
          <Route path="/myghibliuniverse" component={MyGhibliUniverse}/>
          <Route path="/shopping" component={Shopping}/>
          <Route path="/bluray/:id" component={Bluray}/>
          <Route path="/dvd/:id" component={Dvd}/>
          <Route path="/poster/:id" component={Poster}/>
          <Route path="/tshirt/:id" component={Tshirt}/>
          <Route path="/accessories/:id" component={Accessories}/>
          <Route path="/videogames/:id" component={Videogames}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/movies" component={AllMovie}/>
          <Route path="/allcharacters" component={AllCharacter}/>
          <Route path="/alllocations" component={AllLocation}/>
          <Route path="/myplan" component={MyPlan}/>
          <Route path="/community" component={Community}/>
          <Route path="/user/:id" component={User}/>



          <Footer />
        </BrowserRouter>
    );
  }

export default Routing;
