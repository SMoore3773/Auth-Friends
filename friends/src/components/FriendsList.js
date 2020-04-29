import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend';
import AddFriendForm from './AddFriendForm';

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
            this.setState({friends:res.data})
        })
        .catch(err=>console.log('error in getData', err))
    }
    render(){
        console.log('this.state in render of friends list',this.state)
        return(
            <div>
                <h1>Friend List</h1>
                <AddFriendForm/>
                <div>
                    {this.state.friends.map(friend => (
                        <Friend 
                            key={friend.id} 
                            name={friend.name} 
                            age={friend.age} 
                            email={friend.email} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default FriendsList;