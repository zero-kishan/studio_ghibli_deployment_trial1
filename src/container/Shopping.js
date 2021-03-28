import React, { Component } from 'react';
import ShoppingDVDGridDisplay from '../components/ShoppingDVDGridDisplay';
import ShoppingPosterGridDisplay from '../components/ShoppingPosterGridDisplay';
import ShoppingTshirtGridDisplay from '../components/ShoppingTshirtGridDisplay';
import ShoppingAccessoriesGridDisplay from '../components/ShoppingAccessoriesGridDisplay'
import ShoppingBlurayGridDisplay from '../components/ShoppingBlurayGridDisplay';
import ShoppingVideogamesGridDisplay from '../components/ShoppingVideogamesGridDisplay';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Unimain.css';


const dvds_url = 'https://ghibli-json-server.herokuapp.com/dvd';
const posters_url = 'https://ghibli-json-server.herokuapp.com/poster';
const tshirts_url = 'https://ghibli-json-server.herokuapp.com/tshirt';
const accessories_url = 'https://ghibli-json-server.herokuapp.com/accessories';
const blu_rays_url = 'https://ghibli-json-server.herokuapp.com/blu_ray';
const videogames_url = 'https://ghibli-json-server.herokuapp.com/videogames';
class Shopping extends Component {
    constructor() {
        super()
        this.state = {
            dvds: '',
            dvds_filtered: '',
            posters: '',
            posters_filtered: '',
            tshirts: '',
            tshirts_filtered: '',
            accessories: '',
            accessories_filtered: '',
            videogames: '',
            blu_rays_filtered: '',
            videogames: '',
            videogames_filtered: '',

        }
    }
    changeHandler = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.dvds.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ dvds_filtered: filtering });//changing state's value
    }
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.posters.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ posters_filtered: filtering });//changing state's value
    }
    changeHandler3 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.tshirts.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ tshirts_filtered: filtering });//changing state's value
    }

    changeHandler5 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.accessories.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ accessories_filtered: filtering });//changing state's value
    }

    changeHandler6 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.blu_rays.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ blu_rays_filtered: filtering });//changing state's value
    }

    changeHandler7 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.videogames.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ videogames_filtered: filtering });//changing state's value
    }





    render() {
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }


        return (
            <>
                <Header />
                <SideBar />

                <div className="row navbar sticky-top  main" style={{ textAlign: 'center', padding: '15px', backgroundColor: '#111', marginRight: '0px' }}>
                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#Blu-Ray_search"
                    ><h6>Blu_Ray</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#DVD_search"
                    ><h6>DVD</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#Poster_search"
                    ><h6>Poster</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#Tshirt_search"
                    ><h6>T-Shirts</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#Accessories_search"
                    ><h6>Accessories</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-2 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/shopping#Videogame_search"
                    ><h6>Videogames</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                </div>

                <center>
                    <SearchBar category='Blu-Ray' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <ShoppingBlurayGridDisplay blu_rayslist={this.state.blu_rays_filtered} />

                <center>
                    <SearchBar category='DVD' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <ShoppingDVDGridDisplay dvdslist={this.state.dvds_filtered} />

                <center>
                    <SearchBar category='Poster' filter={(input) => { this.changeHandler2(input) }} />
                </center>
                <ShoppingPosterGridDisplay posterslist={this.state.posters_filtered} />

                <center>
                    <SearchBar category='Tshirt' filter={(input) => { this.changeHandler3(input) }} />
                </center>
                <ShoppingTshirtGridDisplay tshirtslist={this.state.tshirts_filtered} />

                <center>
                    <SearchBar category='Accessories' filter={(input) => { this.changeHandler5(input) }} />
                </center>
                <ShoppingAccessoriesGridDisplay accessorieslist={this.state.accessories_filtered} />

                <center>
                    <SearchBar category='Videogame' filter={(input) => { this.changeHandler7(input) }} />
                </center>
                <ShoppingVideogamesGridDisplay videogameslist={this.state.videogames_filtered} />



            </>
        )
    }

    componentDidMount() {
        axios.get(dvds_url)
            .then((response) => {
                this.setState({ dvds: response.data })
                this.setState({ dvds_filtered: response.data })
            })

        axios.get(posters_url)
            .then((response) => {
                this.setState({ posters: response.data })
                this.setState({ posters_filtered: response.data })
            })
        axios.get(tshirts_url)
            .then((response) => {
                this.setState({ tshirts: response.data })
                this.setState({ tshirts_filtered: response.data })
            })

        axios.get(accessories_url)
            .then((response) => {
                this.setState({ accessories: response.data })
                this.setState({ accessories_filtered: response.data })
            })

        axios.get(blu_rays_url)
            .then((response) => {
                this.setState({ blu_rays: response.data })
                this.setState({ blu_rays_filtered: response.data })
            })

        axios.get(videogames_url)
            .then((response) => {
                this.setState({ videogames: response.data })
                this.setState({ videogames_filtered: response.data })
            })


    }
}
export default Shopping;