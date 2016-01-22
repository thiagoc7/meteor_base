
export function hideCompleted(state = true, action) {
  switch (action.type) {
    case 'TOGGLE_HIDE_COMPLETED':
      return !state;

    default:
      return state;
  }
};