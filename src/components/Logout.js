import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router";

const Logout = (props) => {
    const logout = () => {
        localStorage.removeItem('userGhibli')
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('role')
        localStorage.setItem("isloggedinGhibli", false);
        props.history.push('/')
    }
    return (
        <>

            <button className='btn' onClick={logout} style={{ width: '95px', height: '46px', backgroundColor: 'white', fontFamily: 'Nora', color: 'grey' }}><img alt='g logo' src="https://img.icons8.com/small/16/000000/google-logo.png" style={{ display: 'inlineBlock', paddingRight: '3px' }} />Logout</button>

        </>
    )
}

export default withRouter(Logout);