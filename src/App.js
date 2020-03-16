import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './routes'
import LoginPage from './routes/auth'
import './App.css';


class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={LoginPage} />
			</Switch>
		);
	}
}

export default App;
