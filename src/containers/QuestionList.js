import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionList from '../components/QuestionList';
import * as QuestionActions from '../actions/question';


const mapStateToProps = state => ({
    questions: state.questionnaire
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(QuestionActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList);
