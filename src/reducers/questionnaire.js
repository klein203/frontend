import { ADD_QUESTION, EDIT_QUESTION } from '../types';

const initialState = [{
    id: 1,
    title: 'New Question',
    // type: 'OPEN_QUESTION',
    editing: false
}]

const questionnaire = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return [
                ...state,
                {
                    id: state.reduce((maxId, question) => Math.max(question.id, maxId), 0) + 1,
                    title: 'New Question',
                    editing: true
                }
            ];
        case EDIT_QUESTION:
            return state.map(question =>
                question.id === action.id ? { ...question, title: action.title } : question
            );
        default:
            return state;
    }
}

export default questionnaire;
