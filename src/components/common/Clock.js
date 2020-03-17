import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';


/*
    props and state, independent instance, defaultProps
*/
class Clock extends React.Component {
	static defaultProps = {
		name: "Default",
		interval: 1,
	}

	static propTypes = {
		name: PropTypes.string,
		interval: PropTypes.number,
	}

	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			this.props.interval * 1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<span>
				{this.props.name}: {this.state.date.toLocaleTimeString()} update at every {this.props.interval}s 
			</span>
		);
	}
}


/*
    map
*/
class Clocks extends React.Component {
	render() {
		return (
			<List header={<div>Clocks</div>} bordered>
				{this.props.config.map((c) => {
					return (
						<List.Item key={c.id}>
							<Clock name={c.name} interval={c.interval} />
						</List.Item>
					)}
				)}
			</List>
		);
	}
}

export default Clocks;
