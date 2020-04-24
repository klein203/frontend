import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import QuestionList from '../containers/QuestionList';


class Questionnaire extends React.Component {
    static propTypes = {
        onAddNewQuestion: PropTypes.func.isRequired
    }

    render() {
        const { onAddQuestion } = this.props;
        return (
            <div>
                <Button type="primary" onClick={() => onAddQuestion()}>Add New Question</Button>
                <QuestionList />
            </div>
        )
    }
}

export default Questionnaire;
