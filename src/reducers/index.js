import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    //shorthand property name
    //(see e.g. https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand):
    courses 
});

export default rootReducer;