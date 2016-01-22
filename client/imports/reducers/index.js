import { combineReducers } from 'redux';

import { hideCompleted, meteorData } from './taskReducer';

const tasksApp = combineReducers({
  hideCompleted,
  meteorData
});

export default tasksApp