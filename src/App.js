import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import MainFrame from './scenes'
import HomePage from './scenes/Home';
import ClockPage from './scenes/Demo/scenes/Clock';
import PopperPage from './scenes/Demo/scenes/Popper';
import TablePage from './scenes/Demo/scenes/Table';
import LoginPage from './scenes/Auth/scenes/Login';
import RegisterPage from './scenes/Auth/scenes/Register';
import PageNotFoundPage from './scenes/System/scenes/PageNotFound';


class App extends React.Component {
	render() {
		return (
			// <div className="App">
			<div>
				<BrowserRouter>
					<MainFrame>
						<Switch>
							{/* {
								router.map(
									({path, componentName, exact=true, routes=[]}, key) => {
										return (
										<Route exact={exact} key={key} path={path} render={
											props => (<componentName {...props} routes={routes} />)
										}/>
									)} */}
							<Route exact path='/' component={HomePage} />
							<Route path='/demo/clock' component={ClockPage} />
							<Route path='/demo/table' component={TablePage} />
							<Route path='/demo/popper' component={PopperPage} />
							<Route path='/auth/register' component={RegisterPage} />
							<Route path='/auth/login' component={LoginPage} />
							<Route component={PageNotFoundPage} />
						</Switch>
					</MainFrame>
				</BrowserRouter>
			</div>
		)
	}
}

export default App;
