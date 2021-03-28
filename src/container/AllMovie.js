import React, { Component } from 'react';
import AllMovieComponent from '../components/AllMovieComponent';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import axios from 'axios';
import './Unimain.css'
const filmsUrl = 'https://ghibli-json-server.herokuapp.com/films';
class AllMovie extends Component {
    constructor() {
        super()
        this.state = {
            films: '',
            films_filtered: ''
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
    



    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }
        
        
        return (
            <>
            <Header />
            <SideBar/>
                
                <center>
                    <SearchBar category='Movie' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <AllMovieComponent filmslist={this.state.films_filtered} />
                
               
            </>
        )
    }

    componentDidMount() {
        axios.get(filmsUrl)
            .then((response) => {
                this.setState({ films: response.data })
                this.setState({ films_filtered: response.data })
            })

      
    }
}
export default AllMovie;