import React, { Component } from 'react';
import ShoppingDVDGridDisplay from '../components/ShoppingDVDGridDisplay';
import ShoppingPosterGridDisplay from '../components/ShoppingPosterGridDisplay';
import ShoppingTshirtGridDisplay from '../components/ShoppingTshirtGridDisplay';
import ShoppingAccessoriesGridDisplay from '../components/ShoppingAccessoriesGridDisplay'
import ShoppingBlurayGridDisplay from '../components/ShoppingBlurayGridDisplay';
import ShoppingVideogamesGridDisplay from '../components/ShoppingVideogamesGridDisplay';
import AdminUpgradeRequestGridDisplay from '../components/AdminUpgradeRequestGridDisplay';
import AdminUserControlGridDisplay from '../components/AdminUserControlGridDisplay';
import CommunityComponent from '../components/CommunityComponent'
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import SideBar from '../components/SideBar'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios';
import './Unimain.css';


const upgrade_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/history';
const users_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/users';
class Community extends Component {
    constructor() {
        super()
        this.state = {
            users: '',
            users_filtered: '',
        }
    }
    
    changeHandler2 = (input) => { //a callback function which is called once it's triggered from the SearchBar.js, input conatins the input by the user inside the search bar
        const filtering = this.state.users.filter(//using filter to filter the data; it sees whether the input is present in any of the list's city_name
            (data) => {
                return data.name.toLowerCase().indexOf(input.toLowerCase()) > -1 //the returned value will always be true if input is present in any of the list's city_name as indexOf() will return a value greater than -1
            }
        )
        this.setState({ users_filtered: filtering });//changing state's value
    }
  




    render() {
      let filtering = "";
        if (sessionStorage.getItem('email') == null) {
            this.props.history.push('/')
        }
        if(this.state.users_filtered){
          filtering = this.state.users_filtered.filter((item, index) => {
          
            return item.email != sessionStorage.getItem("email")
          })
        }


        return (
            <>
                <Header />
                <SideBar />

                


                <center>
                    <SearchBar category='Profile' filter={(input) => { this.changeHandler2(input) }} />
                </center>
                <CommunityComponent user_list={filtering}  />

                



            </>
        )
    }

    componentDidMount() {
    

        axios.get(users_url)
            .then((response) => {
                this.setState({ users: response.data })
                this.setState({ users_filtered: response.data })
            })
       

    }
}
export default Community;