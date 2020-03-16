import React, { Component } from 'react';
import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';
import RefComponent from '../../components/common/FocusInput';
import ClockBlock from '../../components/common/Clock';
import List from '../../components/common/DataTable';
import Popper from '../../components/common/Popper';


const clockConfig = [
    {
        id: 1,
        name: "Alpha",
        desc: "Alpha Clock"
    }, {
        id: 2,
        name: "Beta",
        desc: "Beta Clock"
    }, {
        id: 3,
        name: "Gamma",
        desc: "Gamma Clock"
    }, {
        id: 4,
        name: "Theta",
        desc: "Theta Clock"
    }
];

var step = 1;

class DemoPage extends Component {
    render() {    
        return (
            <div>
                <RefComponent />
                <ClockBlock config={clockConfig} />
                <List />
                <Popper step={step} />
            </div>
        );
    }
}

export default DemoPage;
