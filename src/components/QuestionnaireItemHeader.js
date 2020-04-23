import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import QuestionItemHeader from './QuestionItemHeader';
import QuestionItemList from './QuestionItemList';


class QuestionnaireItemHeader extends React.Component {
    static propTypes = {
        onFetchClick: PropTypes.func.isRequired
    }

    render() {
        // const { onNewQuestionnaire } = this.props;
        return (
            <Input type="input" />
        )
    }
}

export default QuestionnaireItemHeader;
