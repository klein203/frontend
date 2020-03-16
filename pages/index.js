import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';

// import SiderComponent from './sider'
// import Tooltip from '../component/tooltip'
// import MyNews from '../component/myNews'

const { Header, Footer, Sider, Content } = Layout;


class MainPage extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default MainPage;
