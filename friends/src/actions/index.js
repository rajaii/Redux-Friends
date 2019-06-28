import axios from "axios";

import axiosWithAuth from './axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START});
    return axios.post('http://localhost:5000/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({type: LOGIN_SUCCESS})
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err.response}))

}

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCH_START});
    return axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}))
}

export const POST_START = 'FETCH_START';
export const POST_SUCCESS = 'FETCH_SUCCESS';
export const POST_FAILURE = 'FETCH_FAILURE';

export const postFriend = friend => dispatch => {
    dispatch({type: POST_START});
    return axiosWithAuth().post('http://localhost:5000/api/friends', friend)
    .then(res => dispatch({type: POST_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POST_FAILURE, payload: err.response}))

}



