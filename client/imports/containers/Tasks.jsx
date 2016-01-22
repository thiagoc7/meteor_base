import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

import { toggleChecked, deleteTask } from './../actions/taskActions';
import Task from './Task.jsx'

class TasksContainer extends Component {

  getMeteorData() {
    let query = {};
    if (this.props.hideCompleted) { query = {checked: {$ne: true}} }

    const taskSub = Meteor.subscribe('tasks');
    return {
      tasksReady: taskSub.ready(),
      tasks: TaskModel.find(query, {sort: {createdAt: -1}}).fetch() || []
    }
  }

  render() {
    if (!this.data.tasksReady) {
      return  <h5>Loading...</h5>
    }

    const { dispatch } = this.props;

    return (
        <ul>
          {this.data.tasks.map(task => <Task
              key={task._id}
              onToggleChecked={(t) => dispatch(toggleChecked(t))}
              onDeleteThisTask={(t) => dispatch(deleteTask(t))}
              task={task}
          />
              )}
        </ul>
    )
  }
}

TasksContainer.propTypes = {
  hideCompleted: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    hideCompleted: state.hideCompleted
  }
}

TasksContainer = ReactMixin.onClass(TasksContainer, ReactMeteorData);

export default connect(mapStateToProps)(TasksContainer);