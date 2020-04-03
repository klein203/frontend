import React from 'react';
import PropTypes from 'prop-types'


export default class AddName extends React.Component {
    static propTypes = {
        lastname: PropTypes.string.isRequired,
        lastage: PropTypes.number.isRequired,

        addNameFunc: PropTypes.func.isRequired,
        addAgeFunc: PropTypes.func.isRequired,
        addNameAsyncFunc: PropTypes.func.isRequired
    }

    addNameFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addName(inputName);
    }

    addAgeFunc = () => {
        const inputage = this.refs.inputValueAge.value;
        this.props.addAge(inputage);
    }

    addNameAsyncFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addNameAsync(inputName);
    }

    render() {
        const { lastname, lastage } = this.props;
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div>
                    <label> {lastname} </label>
                    <input ref="inputValueTest" />
                    <button onClick={this.addNameFunc}>Confirm</button>
                </div>
                <div>
                    <label> {lastage} </label>
                    <input ref="inputValueAge" />
                    <button onClick={this.addAgeFunc}>Sync Confirm</button>
                    <button onClick={this.addNameAsyncFunc}>Async Confirm</button>
                </div>
            </div>
        );
    }
}
