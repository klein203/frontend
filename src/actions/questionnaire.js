import { ADD_QUESTIONNAIRE, EDIT_QUESTIONNAIRE_TITLE } from '../types';


export const addQuestionnaire = () => ({
    type: ADD_QUESTIONNAIRE
});

export const editQuestionnaireTitle = (id, title) => ({
    type: EDIT_QUESTIONNAIRE_TITLE,
    id,
    title
});
