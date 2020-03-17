import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import PageNotFoundPage from './scenes/System/scenes/PageNotFound'
import HomePage from './scenes/Home'
import RegisterPage from './scenes/Auth/scenes/Register'
import LoginPage from './scenes/Auth/scenes/Login'
import ClockPage from './scenes/Demo/scenes/Clock'
import TablePage from './scenes/Demo/scenes/Table'
import PopperPage from './scenes/Demo/scenes/Popper'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/demo/clock' component={ClockPage} />
                <Route path='/demo/table' component={TablePage} />
                <Route path='/demo/popper' component={PopperPage} />
                <Route path='/auth/register' component={RegisterPage} />
                <Route path='/auth/login' component={LoginPage} />
                <Route component={PageNotFoundPage} />
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
