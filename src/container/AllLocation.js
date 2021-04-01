import React, { Component } from 'react';
import HomeMovieGridDisplay from '../components/HomeMovieGridDisplay';
import HomeCharacterGridDisplay from '../components/HomeCharacterGridDisplay';
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
import AllLocationComponent from '../components/AllLocationComponent';


const filmsUrl = 'https://studio-ghibli-universe-backend.herokuapp.com/films/view';
const characters_url = 'https://studio-ghibli-universe-backend.herokuapp.com/character/view';
const locations_url = 'https://studio-ghibli-universe-backend.herokuapp.com/location/view';
const televisions_url ='https://ghibli-json-server.herokuapp.com/television';
const stageproductions_url ='https://ghibli-json-server.herokuapp.com/stageproductions'
class AllLocation extends Component {
    constructor() {
        super()
        this.state = {
            locations: '',
            locations_filtered: ''
        }
    }
 
    changeHandler3 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.locations.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ locations_filtered: filtering });//changing state's value
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
                    <SearchBar category='Location' filter={(input) => { this.changeHandler3(input) }} />
                </center>
                <AllLocationComponent locationslist={this.state.locations_filtered} />
                
              
            </>
        )
    }

    componentDidMount() {
      
        axios.get(locations_url)
            .then((response) => {
                this.setState({ locations: response.data })
                this.setState({ locations_filtered: response.data })
            })

    }
}
export default AllLocation;