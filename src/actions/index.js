import { ADD_NAME, ADD_AGE } from "./action-type";

// action creators
export const addName = (name) => ({
    type: ADD_NAME,
    data: name
})

export const addAge = (age) => ({
    type: ADD_AGE,
    data: age
})

export const addNameAsync = (name, interval = 2000) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addName(name))
        }, interval)
    }
}
