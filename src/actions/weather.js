import { SUCCESS, ERROR } from "../types";


export const success = (payload) => ({
    type: SUCCESS,
    payload
});

export const error = () => ({
    type: ERROR
});
