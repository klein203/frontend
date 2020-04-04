// import { combineReducers } from 'redux'
import { OP_PLUS, OP_MINUS } from '../actions/action-type'


const counter = (state = { count: 0 }, action) => {
    switch (action.type) {
        case OP_PLUS:
            return {
                count: state.count + action.data
            }
        case OP_MINUS:
            return {
                count: state.count - action.data
            }
        default:
            return state
    }
}

export default counter;
