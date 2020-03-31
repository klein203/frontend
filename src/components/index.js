import React from 'react';
import PropTypes from 'prop-types'


class AddName extends React.Component {
    static propTypes = {
        lastname: PropTypes.string.isRequired,
        addNameCreater: PropTypes.func.isRequired,
        lastage: PropTypes.number.isRequired,
        addAgeCreater: PropTypes.func.isRequired,
        addNameAsync: PropTypes.func.isRequired
    }

    handlerFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addNameCreater(inputName);
    }

    handlerAgeFunc = () => {
        const inputage = this.refs.inputValueAge.value;
        this.props.addAgeCreater(inputage);
    }

    handlerAsyncFunc = () => {
        const inputName = this.refs.inputValueTest.value;
        this.props.addNameAsync(inputName);
    }

    render() {
        const { lastname, lastage } = this.props;
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <label> {lastname} </label><br />
                <input ref="inputValueTest" /><br />
                <button onClick={this.handlerFunc}>confirm</button><br />

                <label> {lastage} </label><br />
                <input ref="inputValueAge" />
                <button onClick={this.handlerAgeFunc}>confirm</button><br />

                <button onClick={this.handlerAsyncFunc}>Async Confirm</button><br />
            </div>
        );
    }
}

export default AddName;