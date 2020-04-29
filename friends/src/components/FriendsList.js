import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
        friends: []
    };
    componentDidMount(){
        this.getData();
    }
    getData = () => {
        axiosWithAuth()
        .get('http://localhost:4000/api/friends')
        .then(res => {
            console.log('friends in axiosWithAuth',res.data)
            this.setState(res.data)
        })
    }
    render(){
        return(
            <div>
                <h1>Friend List</h1>
                {this.state.friends.map(friend => (
                    
                        <Friend 
                            key={friend.id} 
                            name={friend.name} 
                            age={friend.age} 
                            email={friend.email} 
                        />
                  
                    ))}
            </div>
        )
    }
}
export default FriendsList;