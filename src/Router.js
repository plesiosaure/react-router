import React, { Component } from 'react';
import {  BrowserRouter, Switch} from 'react-router-dom';

import Home from './Home';
import History from './History';
import DefaultLayout from './Layout'

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
         <Switch>
            <DefaultLayout exact path="/" component={Home} />
            <DefaultLayout path="/notre-histoire" component={History} />
          </Switch>
        </BrowserRouter>
     );
  }
}

export default Router;
