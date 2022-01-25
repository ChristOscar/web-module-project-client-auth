import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

//Components
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import LogOut from './components/Logout';
import AddFriends from './components/AddFriends';


function App() {

  
  return (
    <Router>
      <div className="App">
        <ul>
          <h1>User Authorization</h1>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/hiddenFriend">Friends List</Link>
          </li>
          <li>
            <Link to="/hiddenAdd">Add Friends</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
          <Route path="/hiddenFriend" component={FriendsList} />
          <Route path="/hiddenAdd" component={AddFriends} />
          <Route path="/logout" component={LogOut} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
