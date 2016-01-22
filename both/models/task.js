TasksModel = new Mongo.Collection('tasks');
TaskModel = Astro.Class.create({
  name: 'TaskModel',
  collection: TasksModel,
  fields:{
    text: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: () => new Date()
    }
  }
});