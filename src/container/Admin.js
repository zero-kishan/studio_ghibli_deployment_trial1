import React, { Component } from 'react';
import ShoppingDVDGridDisplay from '../components/ShoppingDVDGridDisplay';
import ShoppingPosterGridDisplay from '../components/ShoppingPosterGridDisplay';
import ShoppingTshirtGridDisplay from '../components/ShoppingTshirtGridDisplay';
import ShoppingAccessoriesGridDisplay from '../components/ShoppingAccessoriesGridDisplay'
import ShoppingBlurayGridDisplay from '../components/ShoppingBlurayGridDisplay';
import ShoppingVideogamesGridDisplay from '../components/ShoppingVideogamesGridDisplay';
import AdminUpgradeRequestGridDisplay from '../components/AdminUpgradeRequestGridDisplay';
import AdminUserControlGridDisplay from '../components/AdminUserControlGridDisplay';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Unimain.css';


const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
class Shopping extends Component {
    constructor() {
        super()
        this.state = {
            upgrade: '',
            upgrade_filtered: '',
            users: '',
            users_filtered: '',
        }
    }
    changeHandler = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.upgrade.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.email.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ upgrade_filtered: filtering });//changing state's value
    }
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.users.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.email.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ users_filtered: filtering });//changing state's value
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
                    <div className="col-sm-6 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/admin#Upgrade_search"
                    ><h6>Upgrade Request</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                    <div className="col-sm-6 movie_page_navigation">
                    <HashLink className="movie_categories_link" 
                        to="/admin#User_search"
                    ><h6>User Control</h6>
                    <span className="sr-only">(current)</span>
                    </HashLink>
                    </div>

                  
                </div>

                <center>
                    <SearchBar category='Upgrade' filter={(input) => { this.changeHandler(input) }} />
                </center>
                <AdminUpgradeRequestGridDisplay upgrade_list={this.state.upgrade_filtered} />

                <center>
                    <SearchBar category='User' filter={(input) => { this.changeHandler2(input) }} />
                </center>
                <AdminUserControlGridDisplay user_list={this.state.users_filtered} />

                



            </>
        )
    }

    componentDidMount() {
        axios.get(upgrade_url)
            .then((response) => {
                this.setState({ upgrade: response.data })
                this.setState({ upgrade_filtered: response.data })
            })

        axios.get(users_url)
            .then((response) => {
                this.setState({ users: response.data })
                this.setState({ users_filtered: response.data })
            })
       

    }
}
export default Shopping;