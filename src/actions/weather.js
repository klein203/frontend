import { SUCCESS, ERROR } from "../types"


export const success = (payload) => {
    return {
        type: SUCCESS,
        payload
    }
}

export const error = () => {
    return {
        type: ERROR
    }
}

