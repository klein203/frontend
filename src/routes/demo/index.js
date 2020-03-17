import React, { Component } from 'react';
// import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';
import RefComponent from '../../components/common/FocusInput';
import Popper from '../../components/common/Popper';


var step = 1;

class DemoPage extends Component {
    render() {    
        return (
            <div>
                <RefComponent />
                <Popper step={step} />
            </div>
        );
    }
}

export default DemoPage;
