import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import QuestionList from '../containers/QuestionList';
import { Layout } from 'antd';


const { Content } = Layout;


class Questionnaire extends React.Component {
    static propTypes = {
        onAddQuestion: PropTypes.func.isRequired
    }

    render() {
        const { onAddQuestion } = this.props;
        return (
            <div>
                <Layout>
                    <Content>
                        <div>
                            <span>Demo - Questionnaire</span>
                        </div>
                        <Button type="primary" onClick={() => onAddQuestion()}>Add New Question</Button>
                        <QuestionList />
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Questionnaire;
