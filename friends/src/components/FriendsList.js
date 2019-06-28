import React from 'react';
import { connect } from 'react-redux';
import { getData, postFriend } from '../actions';
import { withRouter} from 'react-router-dom';


import Friend from './Friend';

class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    componentDidMount() {
        this.props.getData()
        .then(() => console.log(this.props.friends))
        }

        handleChange = e => {
            this.setState({
                newFriend: {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
                }
            })
        }

        handleSubmit = e => {
            e.preventDefault();
            this.props.postFriend(this.state.newFriend);
            this.setState({
                newFriend: {
                    name: '',
                    age: '',
                    email: ''
                }
            })
        }
     
    render() {
        return (
            <div>
                <form type='submit' onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    placeholder='name'
                    onChange={this.handleChange}
                    value={this.state.newFriend.name}
                    name='name'
                    />
                    <input 
                    type="text"
                    placeholder='age'
                    onChange={this.handleChange}
                    value={this.state.newFriend.age}
                    name='age'
                    />
                    <input 
                    type="text"
                    placeholder='email'
                    onChange={this.handleChange}
                    value={this.state.newFriend.email}
                    name='email'
                    />
                    <button>Post New Friend</button>
                </form>

                {this.props.friends && this.props.friends.map(friend => <Friend name={friend.name} age={friend.age} email={friend.email} />)}
            </div>
        )
    }
}
//specify reducer when using multiple reducers and combineReducer!!!!!!!
const mapStateToProps = state => {
    return {
        friends: state.fetchReducer.friends,

    }
}
 
export default withRouter(connect(mapStateToProps, { getData, postFriend })(FriendsList));