import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Questionnaire from '../components/Questionnaire';
import { addQuestionnaire } from '../actions';


const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        onNewQuestionnaire: addQuestionnaire
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questionnaire);
