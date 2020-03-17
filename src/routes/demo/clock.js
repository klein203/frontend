import React, { Component } from 'react';
import Clocks from '../../components/common/clock'


const clockConfig = [
    {
        id: 1,
		name: "Alpha",
		interval: 1,
        desc: "Alpha Clock"
    }, {
        id: 2,
        name: "Beta",
		interval: 2,
        desc: "Beta Clock"
    }, {
        id: 3,
        name: "Gamma",
		interval: 3,
        desc: "Gamma Clock"
    }
];

class ClockPage extends React.Component {
    render() {
        return (
            <div>
                <Clocks config={clockConfig} />
            </div>
        )
    }
}

export default ClockPage;
