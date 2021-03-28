import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ShoppingDisplay.css';


const order_url = 'https://studio-ghibli-universe-backend.herokuapp.com/orders/edit';
const user_edit_url = 'https://studio-ghibli-universe-backend.herokuapp.com/api/auth/edit';




const handle_accept = (item) => {
  console.log({ email: item.email })
  alert('account changed to ghiblian')
  fetch(`${order_url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ _id: item._id, status: "accepted" })
  });
  fetch(`${user_edit_url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ email: item.email, role: "ghiblian" })
  });
}

const handle_reject = (item) => {
  console.log({ email: item.email })
  alert('account conversion rejected')
  fetch(`${order_url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ _id: item._id, status: "rejected" })
  });
}

const handle_user = (item) => {
  alert('account changed back to user')
  fetch(`${order_url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ _id: item._id, status: "expired" })
  });
  console.log({ email: item.email })
  fetch(`${user_edit_url}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON.stringify({ email: item.email, role: "user" })
  });
}

const AdminUpgradeRequestGridDisplay = (props) => {
  const display = (upgrade_list) => {

    if (upgrade_list) {


      return upgrade_list.map((item, index) => {
        //const upgradeRoute = '/upgrade/' + item.id + '#top';
        return (
          < >
            <div className="card mb-3" style={{ maxWidth: '', backgroundColor: '#687693' }}>
              <div className="row no-gutters">
                <div className="col-md-3">
                
                <center><p className="card-text" ><small>{item.date}</small></p></center>

                </div>

                <div className="col-md-3">
                
                {item.status=="accepted"?
                  <center><p className="card-text" ><small>{item.expiration_date}</small></p></center>
                  :
                  null
                }

                </div>


                <div className="col-md-3">
                <center><p className="card-text" ><small>{item.email}</small></p></center>

                </div>

                <div className="col-md-3">
                  


                { item.status=='pending'?
                  <center>
                  <button onClick={() => { handle_accept(item) }} type="button" className="btn btn-success" style={{margin:'8px'}}><p className="card-text " ><small>Accept</small></p></button>

                
                  <button onClick={() => { handle_reject(item) }} type="button" className="btn btn-danger" style={{margin:'8px'}}><p className="card-text " ><small>Reject</small></p></button>
                  </center>
                  : 
                  item.status=="accepted"?
                  <center>
                  <button type="button"  className="btn btn-warning" disabled style={{margin:'8px'}}><p className="card-text " ><small>{item.status}</small></p></button>
                  <button type="button" onClick={() => { handle_user(item) }} className="btn btn-light"  style={{margin:'8px'}}><p className="card-text " ><small>back to user</small></p></button>
                  </center>
                  :
                  <center>
                  <button type="button"  className="btn btn-warning" disabled style={{margin:'8px'}}><p className="card-text " ><small>{item.status}</small></p></button>
                  </center>

                  

                }
                   

                  
                </div>
              </div>
            </div>
          </>
        )
      })
    }
  }

  return (
    <div className="Shopping_sub_containers main" id='upgrade_shopping'>
      <div className="shoppingcontainer" >
      <div className="card mb-3 " style={{ maxWidth: '', backgroundColor: '#1daeed' }}>
                        <div className="row no-gutters">
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>Date</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>Expiry Date</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>email</p></center>
                          </div></div>
                          <div className="col-md-3">
                          <div className="card-body">
                          <center><p>Status</p></center>
                          </div></div>
                          
                        </div>
                      </div>
        <div className="shopping_grid">
          {display(props.upgrade_list)}
        </div>
      </div>
    </div>
  )
}

export default AdminUpgradeRequestGridDisplay;