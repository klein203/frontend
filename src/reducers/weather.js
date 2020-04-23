import { SUCCESS, ERROR } from '../types';

const weather = (state = { city: '', wind: '' }, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                state: "success",
                info: action.payload
            }
        case ERROR:
            return {
                state: "error"
            }
        default:
            return state;
    }
}

export default weather;
