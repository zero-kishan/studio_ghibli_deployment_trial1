import React, { Component } from 'react';
import HomeMovieGridDisplay from '../components/HomeMovieGridDisplay';
import AllCharacterComponent from '../components/AllCharacterComponent';
import HomeLocationGridDisplay from '../components/HomeLocationGridDisplay';
import HomeVehiclesGridDisplay from '../components/HomeVehiclesGridDisplay'
import HomeTVGridDisplay from '../components/HomeTVGridDisplay';
import HomeStageProductionGridDisplay from '../components/HomeStageProductionGridDisplay';
import HomeTopDisplay from '../components/HomeTopDisplay';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import axios from 'axios';
import './Unimain.css'


const filmsUrl = 'https://ghibli-json-server.herokuapp.com/films';
const characters_url = 'https://ghibli-json-server.herokuapp.com/characters';
const locations_url = 'https://ghibli-json-server.herokuapp.com/locations';
const vehicles_url = 'https://ghibli-json-server.herokuapp.com/vehicles';
const televisions_url ='https://ghibli-json-server.herokuapp.com/television';
const stageproductions_url ='https://ghibli-json-server.herokuapp.com/stageproductions'
class AllCharacter extends Component {
    constructor() {
        super()
        this.state = {
            characters: '',
            characters_filtered: ''
        }
    }
   
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.characters.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ characters_filtered: filtering });//changing state's value
    }
    



    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }
        
        
        return (
            <>
            <Header />
            <SideBar/>
              
                
                <center>
                    <SearchBar category='Character' filter={(input) => { this.changeHandler2(input) }} />
                </center>
                <AllCharacterComponent characterslist={this.state.characters_filtered} />
                
               
            </>
        )
    }

    componentDidMount() {
       
        axios.get(characters_url)
            .then((response) => {
                this.setState({ characters: response.data })
                this.setState({ characters_filtered: response.data })
            })
     
    }
}
export default AllCharacter;