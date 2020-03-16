import React from 'react';


/*
    lifecycle of react object (ver>16), arrow function and this object binding with parameters
*/
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

export default Popper;
