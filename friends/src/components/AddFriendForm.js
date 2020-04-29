//friend object to add  {id: , name: , age: , email: }
import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useInput} from './useInput';

const AddFriendForm = ()=>{
    const{value:name, bind:bindName, reset:resetName} = useInput('');
    const{value:age, bind:bindAge, reset:resetAge} = useInput('');
    const{value:email, bind: bindEmail, reset: resetEmail} = useInput('');

    const handleSubmit = e =>{
        // e.preventDefault();
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

    // console.log(name,age,email,newFriend)
    return(
        <div>
            <form>
                <input 
                type='text'
                name='name'
                placeholder='Name'
                {...bindName}
                />
                <input
                 type='number'
                 name='age'
                 placeholder='Age'
                 {...bindAge}
                 />
                <input
                 type='text'
                 name='email'
                 placeholder='Email'
                 {...bindEmail}/>
                 {/* <button onClick={setNewFriend}>Confirm Friend</button> */}
                <button type='submit' onClick={handleSubmit}>Add New Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;