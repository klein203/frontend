import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
//import logo from './logo.svg';
// import DataTable from './demo/DataTable';
// import ClockBlock from './demo/Clock';
// import Popper from './demo/Popper';
// import FocusInput from './demo/FocusInput';


// function App() {
// 	const clockConfig = [
// 		{
// 			id: 1,
// 			name: "Alpha",
// 			desc: "Alpha Clock"
// 		}, {
// 			id: 2,
// 			name: "Beta",
// 			desc: "Beta Clock"
// 		}, {
// 			id: 3,
// 			name: "Gamma",
// 			desc: "Gamma Clock"
// 		}, {
// 			id: 4,
// 			name: "Theta",
// 			desc: "Theta Clock"
// 		}
// 	];
// 	var step = 1;

// 	return (
// 		<div>
// 			<ClockBlock config={clockConfig} />
// 			<FocusInput />
// 			<Popper step={step} />
// 			<DataTable />
// 		</div>
// 	);
// }


const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Product = () => (
	<div>
		<h2>Product</h2>
	</div>
)


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Link to="/">Home</Link>
					<Link to="/About">About</Link>
					<Link to="/Product">Product</Link>
					<hr />
					<Route path="/" exact component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/product" component={Product}></Route>
				</div>
			</Router>
		);
	}
}

export default App;
