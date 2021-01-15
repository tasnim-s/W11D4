import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => (
    SessionUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))),
        er => (dispatch(receiveErrors(er.responseJSON)))
    )
);

export const logout = () => dispatch => (
    SessionUtil.logout().then((user) => (dispatch( logoutCurrentUser() )))
);

export const signup = user => dispatch => (
    SessionUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))),
        er => (dispatch(receiveErrors(er.responseJSON)))
    )
);
