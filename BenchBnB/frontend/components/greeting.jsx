import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
    const loggedIn = () => (
        <div>
            <h1>Welcome {currentUser.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
    const loggedOut = () => (
        <div>
            <Link to="/signup">Sign up</Link>
            <br/>
            <Link to="/login">Login</Link>
        </div>
    )

    return currentUser ? loggedIn() : loggedOut();
};