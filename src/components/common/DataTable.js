import React from 'react';
import axios from 'axios';


class TrData extends React.Component {
	render() {
		return (
			this.props.users.map((user, i) => {
				return (
					<tr key={user.id} className="text-center">
						<td>{user.id}</td>
						<td>{user.title}</td>
						<td>{user.name}</td>
						<td>{user.sex}</td>
					</tr>
				)
			})
		)
	}
}


/*
	axios (ajax)
*/
class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		const that = this;
		axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
			.then(function (response) {
				that.setState({
					users: response.data,
					isLoaded: true
				});
			})
			.catch(function (error) {
				console.log(error);
				that.setState({
					isLoaded: false,
					error: error
				})
			})
	}

	render() {
		if (this.state.isLoaded) {
			return (
				<div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th className="text-center">ID</th>
								<th className="text-center">姓名</th>
								<th className="text-center">年龄</th>
								<th className="text-center">性别</th>
							</tr>
						</thead>
						<tbody>
							<TrData users={this.state.users} />
						</tbody>
					</table>
				</div>
			);
		} else {
			return (
				<div>Loading</div>
			);
		}
	}
}

export default DataTable;
