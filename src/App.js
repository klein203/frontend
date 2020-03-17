import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
		this.onCollapse = this.onCollapse.bind(this);
		this.getContent = this.getContent.bind(this);
	}

	onCollapse(collapsed) {
		this.setState({
			collapsed: collapsed,
		});
	};

	getContent() {
		console.log(this.props.location.pathname);
		return this.props.children
	}

	render() {
		return (
			<Layout id="components-layout-side" style={{ minHeight: '100vh' }}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['menu_admin', 'menu_demo']}>
						<SubMenu key="menu_admin" title={<span><UserOutlined />Admin</span>}>
							<Menu.Item key="1"><Link to='/'>Home Page</Link></Menu.Item>
							<Menu.Item key="2"><Link to='/login'>Login Page</Link></Menu.Item>
						</SubMenu>
						<SubMenu key="menu_demo" title={<span><LaptopOutlined />Demo</span>}>
							<Menu.Item key="3"><Link to='/demo/clock'>Clocks</Link></Menu.Item>
							<Menu.Item key="4"><Link to='/demo/table'>Table</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					{/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Admin</Breadcrumb.Item>
							<Breadcrumb.Item>Home Page</Breadcrumb.Item>
						</Breadcrumb>
						<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
							{this.getContent()}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Copyright ©2020 Created by Klein</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(App);
