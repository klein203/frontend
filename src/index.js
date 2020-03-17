import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './routes'
import LoginPage from './routes/auth'
import DemoPage from './routes/demo'
import ClockPage from './routes/demo/clock'
import TablePage from './routes/demo/table'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route exact path='/demo' component={DemoPage} />
                <Route path='/demo/clock' component={ClockPage} />
                <Route path='/demo/table' component={TablePage} />
            </Switch>
        </App>
    </BrowserRouter>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
