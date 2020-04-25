import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import QuestionHeader from './QuestionHeader';


class Question extends React.Component {
    static propTypes = {
        question: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string //TODO
        }).isRequired,
        updateQuestion: PropTypes.func.isRequired,
        deleteQuestion: PropTypes.func.isRequired,
        editing: PropTypes.bool //TODO
    }

    state = {
        editing: this.props.editing || false
    }

    handleToggleEditMode = (e) => {
        e.preventDefault();
        this.setState({
            editing: true
        })
    }

    handleSaveHeader = (id, text) => {
        this.props.updateQuestion(id, text);
        this.setState({
            editing: false
        })
    }

    handleDeleteQuestion = (id) => {
        this.props.deleteQuestion(id);
    }

    render() {
        const { question } = this.props;
        let element;

        if (this.state.editing) {
            element = (
                <div className="view">
                    <QuestionHeader text={question.title}
                        placeholder={'Please fill in your question ...'}
                        onSave={(text) => this.handleSaveHeader(question.id, text)} />
                    <Input.TextArea rows={4} />
                </div>
            );
        } else {
            element = (
                <div className="view">
                    <label onDoubleClick={this.handleToggleEditMode}>
                        #{question.id} {question.title}
                    </label>
                    <CloseCircleOutlined onClick={() => this.handleDeleteQuestion(question.id)}/>
                    <Input.TextArea rows={4} />
                </div>
            );
        }

        return element;
    }
}

export default Question;
