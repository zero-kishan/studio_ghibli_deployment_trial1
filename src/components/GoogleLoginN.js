
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login'
import { withRouter } from "react-router";
import { Link, Redirect } from "react-router-dom";
const gurl = "https://studio-ghibli-universe-backend.herokuapp.com/api/auth/google";

class GoogleLoginN extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      email: "",
      name: "",
      error: ''

    }
  }
  componentDidMount() {
    const user = localStorage.getItem('userGhibli');
    
    if (user) {
      let obj = JSON.parse(user);
      //user.json();
      this.setState({loggedIn: true})
      sessionStorage.setItem('role', obj.role);
      sessionStorage.setItem('email', obj.email);
      sessionStorage.setItem('name', obj.name);
      this.props.history.push('/home');
    }
  }
  responseGoogle = (response) => {
    try {
      console.log(response, 'props');
      if (!response || !response.accessToken) {
        alert("sorry, login failed")
        return;
      }
      this.setState({
        email: response.profileObj.email,
        name: response.profileObj.givenName,
        loggedIn: true
      })
      const user = this.state;
      // localStorage.setItem('user', JSON.stringify(user));
      // localStorage.setItem("isloggedin", true);
      // sessionStorage.setItem('email', this.state.email);
      // sessionStorage.setItem('name', this.state.name);
      fetch(gurl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then((res) => res.json())
      .then((data) => {

        sessionStorage.setItem('email', this.state.email);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('role', data.role);
        localStorage.setItem('userGhibli', JSON.stringify(data));
        localStorage.setItem("isloggedinGhibli", true);
        this.props.history.push('/home');
      })
      .catch((err) => {
        this.setState({ error: "Invalid Credentials!!!" })
        console.log(this.state.error)
      })
      //this.props.history.push('/home')
    } catch (error) {
      console.log('this is error', error)
    }
  }


  render() {
    

    return (
      <div>


        {/* !this.state.loggedIn && */}
        <GoogleLogin
          clientId="827339527611-lkbcb6n0msqjpbrhv0ldqskfqkvk6b2h.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

      </div>
    );
  }
}
export default withRouter(GoogleLoginN)