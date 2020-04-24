import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from '../components/Question';


const mapStateToProps = state => ({
    title: ''
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);
