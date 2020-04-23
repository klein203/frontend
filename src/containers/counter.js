import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { plus, minus } from '../actions/counter';
import Counter from '../components/counter';


const mapStateToProps = state => ({
    value: state.counter.count
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        onIncreaseClick: number => plus(number),
        onDecreaseClick: number => minus(number)
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
