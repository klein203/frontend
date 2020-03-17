import React from 'react';
import axios from 'axios';
import { Table } from 'antd';


/*
	axios (ajax)
*/
class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [{
				title: '#',
				dataIndex: 'id',
				key: 'id',
			}, {
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
			}, {
				title: 'Gender',
				dataIndex: 'sex',
				key: 'sex',
			}, {
			}, {
				title: 'Age',
				dataIndex: 'age',
				key: 'age',
			}],

			data: []
		}
	}

	componentDidMount() {
		const that = this;
		axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
			.then(resp => {
				that.setState({
					data: resp.data
				})
			})
			.catch(error => {
				console.log(error);
			});
	}

	render() {
		return (
			<Table columns={this.state.columns} dataSource={this.state.data} />
		)
	}
}

export default DataTable;
