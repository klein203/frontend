import { CREATE_QUESTION, UPDATE_QUESTION, DELETE_QUESTION } from '../types';


export const createQuestion = () => ({
    type: CREATE_QUESTION
});

export const updateQuestion = (id, title) => ({
    type: UPDATE_QUESTION,
    id,
    title
});

export const deleteQuestion = (id) => ({
    type: DELETE_QUESTION,
    id
});
