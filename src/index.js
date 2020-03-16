import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Router from './router'

// ReactDOM.render(<App />, document.getElementById('root'));

// const isConfirmed = (message, callback) => {
//     const allowTransition = window.confirm(message)
//     callback(allowTransition)
// }

// ReactDOM.render(
//     <BrowserRouter getUserConfirmation={isConfirmed}>
//         <App />
//     </BrowserRouter>,
//     document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
