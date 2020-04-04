import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { plus, minus } from '../actions'
import CounterElements from '../components'


const mapStateToProps = state => ({
  value: state.counter.count
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onIncreaseClick: number => plus(number),
    onDecreaseClick: number => minus(number)
  }, dispatch)
)

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterElements)

export default Counter;
