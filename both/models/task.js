Tasks = new Mongo.Collection('tasks');
Task = Astro.Class.create({
  name: 'Task',
  collection: Tasks,
  fields:{
    text: {
      type: String
    },
    checked: {
      type: Boolean
    }
  }
});