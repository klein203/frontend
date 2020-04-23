import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Counter from './containers/counter';
import Weather from './containers/weather';
// import MainFrame from './scenes/Main';
// import router from './router';
// import HomePage from './scenes/Home';
// import ClockPage from './scenes/Demo/scenes/Clock';
// import PopperPage from './scenes/Demo/scenes/Popper';
// import TablePage from './scenes/Demo/scenes/Table';
// import LoginPage from './scenes/Auth/scenes/Login';
// import RegisterPage from './scenes/Auth/scenes/Register';
// import PageNotFoundPage from './scenes/System/scenes/PageNotFound';


// class App extends React.Component {
// 	render() {
// 		return (
// 			// <div className="App">
// 			<div>
// 				<BrowserRouter>
// 					<MainFrame>
// 						<Switch>
// 							<Route exact path="/" >
// 								<Route exact path='/' component={HomePage} />
// 								<Route exact path="/demo" >
// 									<Route path='/clock' component={ClockPage} />
// 									<Route path='/table' component={TablePage} />
// 									<Route path='/demo/popper' component={PopperPage} />
// 								</Route>
// 								<Route path="/auth" >
// 									<Route path='/register' component={RegisterPage} />
// 									<Route path='/login' component={LoginPage} />
// 								</Route>
// 							</Route>
// 							<Route component={PageNotFoundPage} />
// 						</Switch>
// 					</MainFrame>
// 				</BrowserRouter>
// 			</div>
// 		);
// 	}
// }

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
                <Weather />
            </div>
        );
    }
}

export default App;
