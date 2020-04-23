import React from 'react';
import PropTypes from 'prop-types';
import { QuestionItem } from '../components/QuestionItem'


class QuestionItemList extends React.Component {
    static propTypes = {
        // onFetchClick: PropTypes.func.isRequired
    }

    render() {
        // const { onNewQuestionnaire } = this.props;
        return (
            <div>
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
        )
    }
}

export default QuestionItemList;
