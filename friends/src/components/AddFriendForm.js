//friend object to add  {id: , name: , age: , email: }
import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useInput} from './useInput';

const AddFriendForm = ()=>{
    const{value:name, bind:bindName, reset:resetName} = useInput('');
    const{value:age, bind:bindAge, reset:resetAge} = useInput('');
    const{value:email, bind: bindEmail, reset: resetEmail} = useInput('');

    const handleSubmit = e =>{
        addFriend({name,age,email});
        resetName();
        resetAge();
        resetEmail();
    }
 
    const addFriend = newFriend => {
        
        axiosWithAuth()
        .post('http://localhost:4000/api/friends', newFriend)
        .then(res => {
            console.log('add friend success in addFriend form', res)
        })
        .catch(err => console.log('error in addFriend: ', err))
    }  

    return(
        <div>
            <form className='friendForm'>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                {...bindName}
                className='friendInput'
                />
                <input
                 type='number'
                 name='age'
                 placeholder='Age'
                 {...bindAge}
                 className='friendInput'
                 />
                <input
                 type='text'
                 name='email'
                 placeholder='Email'
                 {...bindEmail}
                 className='friendInput'
                 />
                <button className='addNewFriendButton'type='submit' onClick={handleSubmit}>Add New Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;