import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'

export default () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);