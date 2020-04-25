import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';


class QuestionHeader extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        placeholder: PropTypes.string,
        onSave: PropTypes.func.isRequired
    }

    state = {
        text: this.props.text || ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleBlur = (e) => {
        const text = e.target.value.trim()
        this.props.onSave(text)
        this.setState({
            text: text
        })
    }

    handleSubmit = (e) => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            this.setState({
                text: text
            })
        }
    }

    render() {
        return (
            <Input type='text'
                value={this.state.text}
                placeholder={this.props.placeholder}
                autoFocus={true} 
                onChange={this.handleChange}
                onBlur={this.handleBlur} 
                onKeyDown={this.handleSubmit} 
                allowClear />
        );
    }
}

export default QuestionHeader;
