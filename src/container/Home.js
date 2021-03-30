import React, { Component } from 'react';
import HomeMovieGridDisplay from '../components/HomeMovieGridDisplay';
import HomeCharacterGridDisplay from '../components/HomeCharacterGridDisplay';
import HomeLocationGridDisplay from '../components/HomeLocationGridDisplay';
import HomeVehiclesGridDisplay from '../components/HomeVehiclesGridDisplay'
import HomeTVGridDisplay from '../components/HomeTVGridDisplay';
import HomeStageProductionGridDisplay from '../components/HomeStageProductionGridDisplay';
import HomeExhibition from '../components/HomeExhibition'
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
class Home extends Component {
    constructor() {
        super()
        this.state = {
            films: '',
            films_filtered: '',
            characters: '',
            characters_filtered: '',
            locations: '',
            locations_filtered: '',
            vehicles: '',
            vehicles_filtered: '',
            televisions: '',
            televisions_filtered: '',
            stageproductions: '',
            stageproductions_filtered: ''
        }
    }
    changeHandler = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.films.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.title.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ films_filtered: filtering });//changing state's value
    }
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.characters.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ characters_filtered: filtering });//changing state's value
    }
    changeHandler3 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.locations.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ locations_filtered: filtering });//changing state's value
    }

    changeHandler5 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.vehicles.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ vehicles_filtered: filtering });//changing state's value
    }

    changeHandler6 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.televisions.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ televisions_filtered: filtering });//changing state's value
    }

    changeHandler7 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.stageproductions.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ stageproductions_filtered: filtering });//changing state's value
    }



    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }
        
        
        return (
            <>
            <Header />
            <SideBar/>
                <HomeTopDisplay filmslist={this.state.films_filtered} />
                <center>
                    <SearchBar category='Movie' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <HomeMovieGridDisplay filmslist={this.state.films_filtered} />
                
                <center>
                    <SearchBar category='Character' filter={(input) => { this.changeHandler2(input) }} />
                </center>
                <HomeCharacterGridDisplay characterslist={this.state.characters_filtered} />
                
                <center>
                    <SearchBar category='Location' filter={(input) => { this.changeHandler3(input) }} />
                </center>
                <HomeLocationGridDisplay locationslist={this.state.locations_filtered} />
                
                <center>
                    <SearchBar category='Vehicle' filter={(input) => { this.changeHandler5(input) }} />
                </center>
                <HomeVehiclesGridDisplay vehicleslist={this.state.vehicles_filtered} />


                <center>
                    <SearchBar category='Television' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <HomeTVGridDisplay televisionslist={this.state.televisions_filtered} />

                
                <HomeStageProductionGridDisplay stageproductionslist={this.state.stageproductions_filtered} />

                <HomeExhibition />
            </>
        )
    }

    componentDidMount() {
        axios.get(filmsUrl)
            .then((response) => {
                this.setState({ films: response.data })
                this.setState({ films_filtered: response.data })
            })

        axios.get(characters_url)
            .then((response) => {
                this.setState({ characters: response.data })
                this.setState({ characters_filtered: response.data })
            })
        axios.get(locations_url)
            .then((response) => {
                this.setState({ locations: response.data })
                this.setState({ locations_filtered: response.data })
            })

        axios.get(vehicles_url)
            .then((response) => {
                this.setState({ vehicles: response.data })
                this.setState({ vehicles_filtered: response.data })
            })

        axios.get(televisions_url)
        .then((response) => {
            this.setState({ televisions: response.data })
            this.setState({ televisions_filtered: response.data })
        })

        axios.get(stageproductions_url)
        .then((response) => {
            this.setState({ stageproductions: response.data })
            this.setState({ stageproductions_filtered: response.data })
        })
    }
}
export default Home;