import React from 'react';
//import logo from './logo.svg';
import './App.css';
import List from './List';


class Clock extends React.Component {
	static defaultProps = {
		name: "Default"
	}

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			interval: Math.round(Math.random() * 10 + 1, 0) * 1000
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			this.state.interval
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				{this.props.name} @{this.state.interval}ms, Now: {this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}


class ClockBlock extends React.Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.config.map((c) =>
						<li key={c.id}>
							<Clock name={c.name} />
						</li>
					)}
				</ul>
			</div>
		);
	}
}


class Popper extends React.Component {
	constructor() {
		super();
		this.state = {
			msg: "Hello World!",
			clickCounter: 0
		};
		this.handleClick = this.handleClick.bind(this, this.state.msg);
	}

	handleClick = (msg, e) => {
		e.preventDefault();
		this.setState((prevState, props) => ({
			clickCounter: prevState.clickCounter + props.step
		}));
	}

	UNSAFE_componentWillMount() {
		console.log('Component WILL MOUNT!')
	}

	componentDidMount() {
		console.log('Component DID MOUNT!')
	}

	UNSAFE_componentWillReceiveProps(newProps) {
		console.log('Component WILL RECEIVE PROPS!')
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('Component SHOULD UDPATE!')
		return true;
	}

	UNSAFE_componentWillUpdate(nextProps, nextState) {
		console.log('Component WILL UPDATE!');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component DID UPDATE!')
	}

	componentWillUnmount() {
		console.log('Component WILL UNMOUNT!')
	}

	render() {
		return (
			<div>
				<a href="https://reactjs.org" onClick={this.handleClick}>Click</a> ({this.state.clickCounter} - {this.state.msg})
			</div>
		);
	}
}


class RefComponent extends React.Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.refs.myInput.focus();
	}

	render() {
		return (
			<div>
				<input type="text" ref="myInput" />
				<input
					type="button"
					value="Click to focus"
					onClick={this.handleClick}
				/>
			</div>
		);
	}
}


function App() {
	const clockConfig = [
		{
			id: 1,
			name: "Alpha",
			desc: "Alpha Clock"
		}, {
			id: 2,
			name: "Beta",
			desc: "Beta Clock"
		}, {
			id: 3,
			name: "Gamma",
			desc: "Gamma Clock"
		}, {
			id: 4,
			name: "Theta",
			desc: "Theta Clock"
		}
	];
	var step = 1;

	return (
		<div>
			<RefComponent />
			<ClockBlock config={clockConfig} />
			<List />
			<Popper step={step} />
		</div>
	);
}

export default App;
