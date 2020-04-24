import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';


class QuestionItem extends React.Component {
    static propTypes = {
        question: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            editing: PropTypes.bool.isRequired
        }).isRequired
    }

    render() {
        const { question } = this.props;
        return (
            <div>
                <Input type='input' value={ question.title } /><br />
                <Input.TextArea rows={ 4 } cols={ 10 } />
            </div>
        );
    }
}

export default QuestionItem;
