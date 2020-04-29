import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <ul className='navList'>
          <li className='navLink'><Link to ='/'>Home</Link></li>
          <li className='navLink'><Link to='/login'>Login</Link></li>
          <li className='navLink'><Link to ='/friendsList'>Friends List</Link></li>
       </ul>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/login' component={Login} />
         <PrivateRoute exact path='/friendslist' component={FriendsList} />
         <PrivateRoute exact path='/addfriend' component={AddFriendForm} />
       </Switch>
      </div>
    </Router>
  );
}

export default App;
