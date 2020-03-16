import React from 'react';
import '../App.css';


class FocusInput extends React.Component {
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

export default FocusInput;
