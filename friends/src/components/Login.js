import React from 'react';
import { connect } from 'react-redux';
import { login }  from '../actions';
import { withRouter } from 'react-router-dom';


class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        credentials: {
        username: '',
        password: '',
        }
    }
}

handleChange = (e) => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    })
}

handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => this.props.history.push('/friendslist'))
}

render() {
    return (
    <div>
        <form type='submit' onSubmit={this.handleSubmit}>
            <input 
            type='text'
            placeholder='username'
            value={this.state.credentials.username}
            name='username'
            onChange={this.handleChange}
            />
            <input 
            type='password'
            placeholder='password'
            value={this.state.credentials.password}
            name='password'
            onChange={this.handleChange}
            />
            <button>login</button>
        </form>
        
    </div>
    )
}

}
/*
const mapStateToProps = state => {
    return {
    deletingFriend: state.deletingFriend,
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    loggingIn: state.loggingIn,
    isLoggedIn: state.isLoggedIn,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    error: state.error
    }
}
*/



export default withRouter(connect(null, { login })(Login));