Meteor.methods({
  addTask(text) {
    let task = new TaskModel();
    task.set({text});
    return task.save();
  },

  toggleChecked(task) {
    task.set('checked', !task.checked);
    return task.save();
  },

  deleteTask(task) {
    return task.remove();
  }
});
