import { ADD_QUESTIONNAIRE, EDIT_QUESTIONNAIRE_TITLE } from '../types';

const initialState = [
    {
        id: 1,
        title: 'New Questionnaire',
        editing: false,
        questions: [
            {
                id: 1,
                title: 'New Question',
                type: 'OPEN_QUESTION',
                editing: false,
                content: [
                    {
                        text: '',
                        placeholder: 'Please answer the question.',
                        editing: false
                    }
                ]
            }
        ]
    }
];

const questionnaire = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUESTIONNAIRE:
            return [
              ...state,
              {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
                title: 'New Questionnaire',
                editing: false,
                questions: []
              }
            ];
        case EDIT_QUESTIONNAIRE_TITLE:
            return state.map(questionnnaire =>
                questionnnaire.id === action.id ? { ...questionnnaire, title: action.title } : questionnaire
            );
        default:
            return state;
    }
}

export default questionnaire;
