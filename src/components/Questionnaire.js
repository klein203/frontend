import React from 'react';
import QuestionList from '../containers/QuestionList';
import { Layout } from 'antd';


const { Content } = Layout;


class Questionnaire extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Content>
                        <div>
                            <span>Demo - Questionnaire</span>
                        </div>
                        <QuestionList />
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Questionnaire;
