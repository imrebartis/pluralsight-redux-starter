import * as types from '../actions/actionTypes';
import initialState from './initialState';

// checking whether action type ends in 'success'
function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
  }

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  // any time we get an ajax call error or
  // an action type ends in success
  // reduce the nr of Ajax calls that are in progress:
  }  else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}