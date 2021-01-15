import { connect } from "react-redux";
import React from 'react';
import SessionForm from "./session_form"
import { signup } from "../actions/session_actions";
import { Link } from "react-router-dom";

const mStP = ({errors}, ownProps) => ({
    errors: errors.session,
    formType: 'signup',
    link: <Link to="/login">Log in</Link>
});

const mDtP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mStP, mDtP)(SessionForm)