import { CREATE_QUESTION, UPDATE_QUESTION, DELETE_QUESTION } from '../types';

const initialState = [
    // {
    //     id: 0,
    //     title: '',
    //     answer: ''
    // }
]

const questionnaire = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUESTION:
            return [
                ...state,
                {
                    id: state.reduce((maxId, question) => Math.max(question.id, maxId), 0) + 1,
                    title: 'New Question (Double Click to Edit)',
                    answer: ''
                }
            ];
        case UPDATE_QUESTION:
            return state.map(question =>
                question.id === action.id ? { ...question, title: action.title } : question
            );
        case DELETE_QUESTION:
            return state.filter(question =>
                question.id !== action.id).map(question =>
                    question.id > action.id ? { ...question, id: question.id - 1 } : question
                );
        default:
            return state;
    }
}

export default questionnaire;
