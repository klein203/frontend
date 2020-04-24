import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd';


class Question extends React.Component {
    static propTypes = {
        // id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { title } = this.props;
        return (
            <div>
                <Input type='input' value={ title } /><br />
                <Input.TextArea rows={ 4 } />
            </div>
        );
    }
}

export default Question;
