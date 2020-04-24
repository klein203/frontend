import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Questionnaire from '../components/Questionnaire';
import addQuestion from '../actions';


const mapStateToProps = state => ({
    // state.questionnaire
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        onAddQuestion: addQuestion
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionnaire);
