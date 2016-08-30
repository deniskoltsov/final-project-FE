import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Main from './Main.js';
import './css/index.css';

import {Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/main" component={Main}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
