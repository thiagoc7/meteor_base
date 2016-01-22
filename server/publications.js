Meteor.publish("tasks", function () {
  return TaskModel.find();
});