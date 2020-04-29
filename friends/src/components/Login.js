import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


class Login extends React.Component {
    state = {
        credentials: {
           username: '',
           password: '',
        }
    }


    handleChanges = e =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('http://localhost:4000/api/login', this.state.credentials)
        .then(res => {
            console.log('login success in login form', res)
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friendsList')
        })
        .catch(err => console.log('error in login: ', err))
    }  


    render() {
        return(
            <div>
                <h1 className='header'>Login</h1>
                <form className='loginForm' onSubmit={this.login}>
                    <input
                    type='text'
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    placeholder='Username'
                    className='loginField'
                    />
                    <input
                    type='text'
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    placeholder='Password'
                    className='loginField'
                    />
                <button className='loginButton'> Login </button>
                </form>
                <p className='loginWarning'> You must be logged in to view or add friends</p>
            </div>
        );
    }
}

export default Login;