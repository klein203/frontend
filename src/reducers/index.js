import { ADD_NAME, ADD_AGE } from './action-type'
import { combineReducers } from 'redux'


const addName = (state = '', action) => {
    switch (action.type) {
        case ADD_NAME:
            return action.data
        default:
            return state
    }
}

const addAge = (state = 0, action) => {
    switch (action.type) {
        case ADD_AGE:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName,
    addAge
})
