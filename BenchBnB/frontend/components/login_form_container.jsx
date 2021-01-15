import { connect } from "react-redux";
import React from 'react';
import SessionForm from "./session_form"
import { login } from "../actions/session_actions";
import { Link } from "react-router-dom";

const mStP = ({errors}, ownProps) => ({
    errors: errors.session,
    formType: 'login',
    link: <Link to="/signup">Sign Up</Link>
});

const mDtP = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mStP,mDtP)(SessionForm)