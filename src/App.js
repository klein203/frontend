import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;


class App extends Component {
	render() {
		return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>
							<div>
								<Menu>
									<Item><Link to='/'>Home</Link></Item>
									<Item><Link to='/login'>Login</Link></Item>
									<Item><Link to='/demo'>Demo</Link></Item>
								</Menu>
							</div>
						</Sider>
                        <Content>{this.props.children}</Content>
                    </Layout>
                    <Footer>Copyright 2020</Footer>
                </Layout>
            </div>
		);
	}
}

export default App;
