import React from 'react';
import { Button } from 'antd';


/*
    lifecycle of react object (ver>16), arrow function and this object binding with parameters
*/
class Popper extends React.Component {
	constructor() {
		super();
		this.state = {
			message: "Hello World!",
			counter: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault();
		this.setState((prevState, props) => ({
			message: "Hello World! Previous counter is " + prevState.counter + '.',
			counter: prevState.counter + props.step,
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
				<Button type="link" onClick={this.handleClick}>Click to Count</Button>
				<span>Clicked for {this.state.counter} times and message is {this.state.message})</span>
			</div>
		);
	}
}

export default Popper;
