import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';


class QuestionList extends React.Component {
    static propTypes = {
        questions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            editing: PropTypes.string.isRequired
          }).isRequired).isRequired,
          actions: PropTypes.object.isRequired
    }

    id: 1,
    title: 'New Question',
    // type: 'OPEN_QUESTION',
    editing: false
    render() {
        const { questions } = this.props;
        return (
            <section className="main">
                { questions.map(question => <Question key={ question.id } title={ question.title } {...questions} />) }
            </section>
        );
    }
}

export default QuestionList;
