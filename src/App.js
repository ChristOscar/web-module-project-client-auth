import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//Components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import LogOut from './components/Logout';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <h2>Client Auth Project</h2>
      </div>
      <Switch>
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/logout' component={LogOut} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
