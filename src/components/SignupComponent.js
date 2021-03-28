import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SignupComponent.css'
import GoogleLoginN from './GoogleLoginN';

const burl = "https://studio-ghibli-universe-backend.herokuapp.com/api/auth/register";

class SignupComponent extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: '',
      error: '',
      allowSignup: false
    }
  }
  
  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }
  handleChangeRole = (event) => {
    // console.log(event.target.value);
    this.setState({ role: event.target.value })
  }

  componentDidUpdate() {
    if (this.state.email && this.state.name && this.state.password && !this.state.allowSignup) {
      this.setState({ allowSignup: true })
    }
    if ((!this.state.email || !this.state.password || !this.state.name) && this.state.allowSignup) {
      this.setState({ allowSignup: false })
    }
    
  }
  handleSubmit = () => {
    //console.log(this.state)
    fetch(burl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Email already taken! Use another email!") {
          this.setState({
            name: '', email: '',
            password: '', error: data.message
          })
        }
        else{
          this.props.history.push('/LoginComponent')
        }

      })
      .catch((err, data) => {
        this.setState({
          name: '', email: '',
          password: '', error: 'Email already taken!'
        })
      })
    //.then(this.props.history.push('/LoginComponent'))
  }
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (

      <div className='welcome_background' style={{marginTop:'40px'}} >

        <div class="container"> <br />
          <div class="row">

          <div className="col-xs-7 col-sm-6 col-lg-8"><h5>Welcome to Studio Ghibli Universe</h5></div>

          <div className="col-xs-5 col-sm-6 col-lg-4">

              <div style={{ textAlign: 'right' }}>
                {/* <h5  style={{ margin: '10px', color: '#cccdb4', display: 'inline-block' }}>JWT</h5> */}

                <NavLink to='./LoginComponent'><button className="btn" style={{ margin: '10px', backgroundColor: '#111', color: 'white', display: 'inline-block' }}>LOGIN </button></NavLink>
                <NavLink to='./'><button className="btn " style={{ backgroundColor: '#1278a8', color: 'black', display: 'inline-block' }} > SIGNUP</button></NavLink>

              </div>
            </div>



          </div>

          <div className="row">
            <div className="col-xs-7 col-sm-6 col-lg-8">
              <img src={'https://wallpaperaccess.com/full/244846.jpg'} alt="Logo" width='100%' style={{ borderRadius: '2px' }} />
               <br /> <br /><h5>Make your Studio Ghibli Account and watch the latest anime movies from our collection.</h5> <br /></div>

            <div class="col-xs-5 col-sm-6 col-lg-4" style={{ textAlign: 'right' }}>

              <div className="sub-col" >
                <div className="panel panel-danger" style={{
                  backgroundColor: '#1278a8', borderRadius: '2px', padding: '15px', color: 'black', display: 'inline-block'
                }}>

                  <h5 > Signup </h5>
                  <hr style={{ backgroundColor: 'black', height: '2px' }}></hr>

                  <p style={{ color: '#c6461e' }}>{this.state.error}</p>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="control-label">Name</label>
                      <input type="text" name="name" value={this.state.name} className="form-control"
                        required onChange={this.handleChangeName} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                      <input type="email" name="email" value={this.state.email} className="form-control"
                        required onChange={this.handleChangeEmail} />
                    </div>
                    <div className="form-group">
                      <label className="control-label">Password</label>
                      <input type="password" name="password" value={this.state.password} className="form-control"
                        onChange={this.handleChangePassword} required />
                    </div>
                    {
                      this.state.allowSignup ? <button className="but" onClick={this.handleSubmit}>Signup</button> : null
                    }
                    <hr style={{ backgroundColor: 'black', height: '1px' }}></hr>
                    <center><h6>----------or----------</h6></center>
                    {/* <button className="but" onClick={this.handleSubmit}>Signup</button> */}
                    <center><div  style={{ padding: '5px' }}><GoogleLoginN /></div></center>


                  </div>
                </div>

              </div>
            </div>






          </div>
          <hr style={{ backgroundColor: '#1278a8', height: '2px' }}></hr>

          <div class="row">
            <div className="col-xs-5 col-sm-6 col-lg-4">

              <img src={'https://images.saymedia-content.com/.image/t_share/MTc2MjQ0MzQ1NjQ3OTMyODQx/studio-ghibli-movies-and-films-on-netflix.jpg'} alt="Logo" width='300px' style={{ borderRadius: '2px', border: '3px solid #1278a8' }} />
            </div>
            <div className="col-xs-7 col-sm-6 col-lg-8 "  >
               <br /> <br /> <br /> <br />
              <h5>Lookout for the highest rated movies, learn in detail about your favorite movies, characters, locations and vehicles</h5>
              <button className="btn btn-info" onClick={this.topFunction}>Get Started</button>
            </div>
          </div>
          <hr style={{ backgroundColor: '#1278a8', height: '2px' }}></hr>


          <div class="row">
            <div className="col-xs-7 col-sm-6 col-lg-8">
              <br /> <br /> <br /> <br />

              <h5>Buy the wearables of your favorite choice and feel yourself elevated!</h5>
              <button className="btn btn-info" onClick={this.topFunction} >Get Started</button>
            </div>
            <div className="col-xs-5 col-sm-6 col-lg-4 " style={{ textAlign: 'right' }} >
              <img src={'https://vip.socio-corp.jp/wp-content/uploads/sites/3/2020/06/gt-100.png?w=640'} alt="Logo" width='320px' style={{ borderRadius: '5px', border: '3px solid #1278a8' }} />


            </div>


          </div>
          <hr style={{ backgroundColor: '#1278a8', height: '2px' }}></hr>


          <div class="row">
            <div className="col-xs-5 col-sm-6 col-lg-4 ">

              <img src={'https://i.pinimg.com/originals/bf/10/7e/bf107eb77bd29b93111a86306a2dac7e.png'} alt="Logo" width='300px' style={{ borderRadius: '5px', border: '3px solid #1278a8' }} /> <br /> <br />

            </div>
            <div className="col-xs-7 col-sm-6 col-lg-8"  >
              <br /> <br />

              <h5>Collect Exclusive Action figures of your favorite character and brighten up your place and ofcourse your mood!</h5>
              <button className="btn btn-info" onClick={this.topFunction} >Get Started</button> <br />
            </div>


          </div>
          <br />
        </div>
      </div>




    )
  }
}



export default SignupComponent;