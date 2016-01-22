export function addTask(text) {
  return () => {
    Meteor.call('addTask', text);
  };
};

export function toggleChecked(task) {
  return () => {
    Meteor.call('toggleChecked', task);
  };
};

export function deleteTask(task) {
  return () => {
    Meteor.call('deleteTask', task);
  };
};

export function toggleHideCompleted() {
  return {
    type: 'TOGGLE_HIDE_COMPLETED'
  }
};