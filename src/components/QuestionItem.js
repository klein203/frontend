import React from 'react';
import PropTypes from 'prop-types';
import QuestionItemHeader from './QuestionItemHeader';
import QuestionItemList from './QuestionItemList';


class QuestionItem extends React.Component {
    static propTypes = {
        onFetchClick: PropTypes.func.isRequired
    }

    render() {
        // const { onNewQuestionnaire } = this.props;
        return (
            <div>
                <QuestionItemHeader />
                <QuestionItemList />
            </div>
        )
    }
}

export default QuestionItem;
