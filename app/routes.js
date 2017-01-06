// @flow
import React from 'react';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './scripts/App';
import HomePage from './scripts/login/loginPage';
import CounterPage from './scripts/home/homePage';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/counter" component={CounterPage} />
    </Route>
);
