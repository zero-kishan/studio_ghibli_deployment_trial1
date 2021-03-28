import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";


const gurl = "https://studio-ghibli-universe-backend.herokuapp.com/orders/register";

class HandleUserRequest extends Component {
  constructor() {
    super()

    this.state = {
      allow_button: true
    }
  }
  handleGhiblian = () => {
    fetch(gurl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: sessionStorage.getItem('email'), status: "pending" })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Data Registered!") {
          alert("Your request has been registered; wait for a while and login again.")
          this.setState({ allow_button: false })
        }
        else {
          alert("error")
        }

      })
      .catch((err, data) => {
        alert("catch error")
      })
  }
  render() {
    return (
      <>
  
        {
            this.props.pending_check == true ?
            <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }}><h6>Pending request...</h6>
              <span className="sr-only">(current)</span>
            </button>
            :
            this.state.allow_button ?
              <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }} onClick={this.handleGhiblian}><h6>Become a Ghiblian!</h6>
                <span className="sr-only">(current)</span>
              </button> :
  
              <button type='button' className='btn btn-info' style={{ marginLeft: '30px', padding: '5px 2px 0px 3px' }}><h6>Pending request...</h6>
                <span className="sr-only">(current)</span>
              </button>
  
        }
  
      </>
    )
  }

  
}

export default HandleUserRequest;