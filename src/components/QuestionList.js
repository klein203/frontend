import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { Button } from 'antd';


class QuestionList extends React.Component {
    static propTypes = {
        questions: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    render() {
        const { questions, actions } = this.props;
        return (
            <div>
                <Button type="primary" onClick={() => actions.createQuestion()}>Add New Question</Button>
                <section className="main">
                    {questions.map(question =>
                        <Question key={question.id}
                            question={question}
                            updateQuestion={actions.updateQuestion}
                            deleteQuestion={actions.deleteQuestion} />
                    )}
                </section>
            </div>
        );
    }
}

export default QuestionList;
