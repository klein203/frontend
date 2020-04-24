import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionList from '../containers/QuestionList';
import addQuestion from '../actions/question';


const mapStateToProps = state => ({
    questions: state.questionnaire
});

const mapDispatchToProps = dispatch => (
    // bindActionCreators({
    //     onAddNewQuestion: (pid) => addNewQuestion(pid)
    // }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList);
