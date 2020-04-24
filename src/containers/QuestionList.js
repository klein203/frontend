import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';


const mapStateToProps = state => ({
    questions: state.questionnaire
});

const mapDispatchToProps = dispatch => ({
    // bindActionCreators({
    //     onAddNewQuestion: (pid) => addNewQuestion(pid)
    // }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList);
