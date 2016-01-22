import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleChecked, deleteTask } from './../actions/taskActions';
import Task from './Task.jsx'

class TasksContainer extends Component {

  render() {
    const { dispatch, tasks, tasksReady } = this.props;

    if (!tasksReady) {
      return  <h5>Loading...</h5>
    }

    return (
        <ul>
          {tasks.map(task => <Task
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
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  tasksReady: PropTypes.bool.isRequired
};

function mapStateToProps (state) {
  return {
    hideCompleted: state.hideCompleted,
    tasks: state.meteorData.tasks,
    tasksReady: state.meteorData.tasksReady
  }
}

export default connect(mapStateToProps)(TasksContainer);