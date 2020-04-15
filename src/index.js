import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import './index.css'
import App from './App'
import PageNotFoundPage from './scenes/System/scenes/PageNotFound'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import * as serviceWorker from './serviceWorker'

const middleware = [thunk, logger]
const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
				<Route component={PageNotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
