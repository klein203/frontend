import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from './QuestionItem';


class QuestionList extends React.Component {
    static propTypes = {
        questions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            editing: PropTypes.bool.isRequired
          }).isRequired).isRequired
    }

    render() {
        const { questions } = this.props;
        return (
            <section className="main">
                { questions.map(question => 
                    <QuestionItem key={ question.id } question={ question } />
                ) }
            </section>
        );
    }
}

export default QuestionList;
