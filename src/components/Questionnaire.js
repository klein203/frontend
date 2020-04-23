import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';


class Questionnaire extends React.Component {
    static propTypes = {
        onFetchClick: PropTypes.func.isRequired
    }

    render() {
        const { onNewQuestionnaire } = this.props;
        return (
            <div>
                {/* <QuestionnaireItem></QuestionnaireItem> */}
                <Button type="primary" onClick={() => onNewQuestionnaire()}>New Questionnaire</Button>
            </div>
        )
    }
}

export default Questionnaire;
