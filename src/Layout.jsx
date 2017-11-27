import React from 'react'
import {Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

export default function DefaultLayout ({component: MatchedPage, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React Router Chris' Quest</h1>
                </header>
                <NavLink to="/">Accueil</NavLink> -  
                <NavLink to="/notre-histoire" activeClassName="selected">Notre histoire</NavLink>
                <MatchedPage {...matchProps} />
            </div>
        )} />
    )
};