import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import '../../node_modules/toastr/build/toastr.min.css';

const rootReducer = combineReducers({
    //shorthand property name
    //(see e.g. https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand):
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;