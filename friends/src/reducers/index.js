import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
import { POST_START, POST_SUCCESS, POST_FAILURE } from '../actions';
import { combineReducers } from 'redux';

const initialState = {
    
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    isLoggedIn: false,
    savingFriends: false,
    updatingFriend: false,
    addingFriend: false,
    error: null
    
};

function loginReducer(state=initialState, action) {
    
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,

            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        default:
            return state
    }
    
}

function fetchReducer(state=initialState, action) {
    
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingFriends: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        default:
            return state
    }
}

function postReducer (state=initialState, action) {
    switch(action.type) {
        case POST_START:
            return {
                ...state,
                addingFriend: true,
            } 
        case POST_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                addingFriend: false,
            }
        case POST_FAILURE:
            return {
                ...state,
                addingFriend: false,
                error: action.payload
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    loginReducer,
    fetchReducer,
    postReducer
})
export default rootReducer;