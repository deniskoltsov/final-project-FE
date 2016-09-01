import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Favorites from './Favorites.js';
import Main from './Main.js';
import MyProfile from './MyProfile.js';
import About from './About.js';
import './css/index.css';

import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/main" component={Main}></Route>
      <Route path="/myprofile" component={MyProfile}>
        <Route path="/favorites" component={Favorites}></Route>
      </Route>
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
