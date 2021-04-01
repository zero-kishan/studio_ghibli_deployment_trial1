import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import './Unimain.css'

const burl = "https://studio-ghibli-universe-backend.herokuapp.com/api/auth/login";
const forgotpassword_url = "https://studio-ghibli-universe-backend.herokuapp.com/api/auth/editPassword"


class ForgotPassword extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: '',
      allowLogIn: false
    }
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  componentDidUpdate() {
    if (this.state.email && this.state.password && !this.state.allowLogIn) {
      this.setState({ allowLogIn: true })
    }
    if ((!this.state.email || !this.state.password) && this.state.allowLogIn) {
      this.setState({ allowLogIn: false })
    }
  }
  handleSubmit = () => {
    fetch(`${forgotpassword_url}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    })


      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Wrong email entered!") {
          this.setState({
            name: '', email: '',
            password: '', error: data.message
          })
        }
        else{
          this.props.history.push('/loginComponent')
        }
        

      })
      .catch((err) => {
        this.setState({ error: "Invalid Email!!!" })
      })
  }


  render() {
    return (

     

        <div className="container-fluid " style={{padding:'160px 0px 160px 0px', backgroundColor:'#111'}}  > <br />
          


              <div className="" style={{ textAlign: 'center' }}>
                
                  <div className="panel panel-danger" style={{
                    backgroundColor: '#1278a8', borderRadius: '2px', padding: '15px', color: 'black', display: 'inline-block'
                  }}>
                    <div className="panel-heading" style={{ width:'400px' }}>
                      <h5>Reset Password</h5>
                      <hr style={{ backgroundColor: 'black', height: '2px' }}></hr>
                    </div>
                    <p style={{ color: '#c6461e' }}>{this.state.error}</p>

                    <div className="panel-body">
                      <div className="">
                        <label className="control-label">Enter Registered Email</label>
                        <input type="email" name="order_id" value={this.state.email} className="form-control"
                          onChange={this.handleChangeEmail} required />
                      </div>
                      <div className="form-group">
                        <label className="control-label">Enter a New Password</label>
                        <input type="password" name="order_id" value={this.state.password} className="form-control"
                          onChange={this.handleChangePassword} required />
                      </div><br/>
                      {
                        this.state.allowLogIn ? <button className="but" onClick={this.handleSubmit}>Change Password</button> : null
                      }


                    </div>

                </div>




          </div>
          <br />
        </div>


    )




  }
}



export default ForgotPassword;