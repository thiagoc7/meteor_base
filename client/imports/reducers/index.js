import { combineReducers } from 'redux';

import { hideCompleted } from './taskReducer';

const tasksApp = combineReducers({
  hideCompleted
});

export default tasksApp