import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

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

    return (
        <ul>
          {this.data.tasks.map(task => <Task key={task._id} task={task} />)}
        </ul>
    )
  }
}

TasksContainer.propTypes = {
  hideCompleted: PropTypes.bool.isRequired
};

function mapStateToProps (state) {
  return {
    hideCompleted: state.hideCompleted
  }
}

TasksContainer = ReactMixin.onClass(TasksContainer, ReactMeteorData);

export default connect(mapStateToProps)(TasksContainer);