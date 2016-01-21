import React, { Component, PropTypes } from 'react';
//import ReactMixin from 'react-mixin';
import { connect } from 'react-redux'

class App extends Component {

  //getMeteorData() {
  //  const TaskSub = Meteor.subscribe('tasks');
  //  return {
  //    TaskSubReady: TaskSub.ready(),
  //    TasksList: Tasks.find({}).fetch() || []
  //  }
  //}

  render() {
    return (
        <div>
          {this.props.tasks.map(task => <h1 key={task._id}>{task.text}</h1>)}
        </div>
    )
  }
}

//ReactMixin.onClass(App, ReactMeteorData);

function mapStateToProps (state) {
  return {
    tasks: state.tasks
  }
}

connect(
    mapStateToProps
)(App);

export { App };