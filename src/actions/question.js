import { ADD_QUESTION, EDIT_QUESTION } from '../types';


export const addQuestion = () => ({
    type: ADD_QUESTION
});

export const editQuestion = (id, title) => ({
    type: EDIT_QUESTION,
    id,
    title
});
