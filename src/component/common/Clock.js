import React from 'react';
import '../App.css';


/*
    props and state, independent instance, defaultProps
*/
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


/*
    map, <li> with key
*/
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

export default ClockBlock;
