import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';

class App extends Component {

  getMeteorData() {
    const TaskSub = Meteor.subscribe('tasks');
    return {
      TaskSubReady: TaskSub.ready(),
      TasksList: Tasks.find({}).fetch() || []
    }
  }

  render() {
    return (
        <div>
          {this.data.TasksList.map(task => <h1 key={task._id}>{task.text}</h1>)}
        </div>
    )
  }
}

ReactMixin.onClass(App, ReactMeteorData);
export { App };