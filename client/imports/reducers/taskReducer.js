export function hideCompleted(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_HIDE_COMPLETED':
      return !state;

    default:
      return state;
  }
};

const initialMeteorData = {
  tasksReady: false,
  tasks: [],
  incompleteCount: 0
};
export function meteorData(state = initialMeteorData, action) {
  switch (action.type) {
    case 'METEOR_DATA':
      return action.data;

    default:
      return state;
  }
};