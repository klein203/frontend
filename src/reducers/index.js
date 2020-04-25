import { combineReducers } from 'redux';
import counter from './counter';
import weather from './weather';
import questionnaire from './questionnaire';

export default combineReducers({
    counter,
    weather,
    questionnaire
});
