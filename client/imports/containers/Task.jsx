import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { toggleChecked, deleteTask } from './../actions/taskActions';

class Task extends Component {

  toggleChecked() {
    this.props.dispatch(
        toggleChecked(this.props.task)
    )
  }

  deleteThisTask() {
    this.props.dispatch(
        deleteTask(this.props.task)
    )
  }

  render() {
    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
        <li className={taskClassName}>
          <button className="delete" onClick={this.deleteThisTask.bind(this)}>
            &times;
          </button>

          <input
              type="checkbox"
              readOnly={true}
              checked={this.props.task.checked}
              onClick={this.toggleChecked.bind(this)} />

          <span className="text">{this.props.task.text}</span>
        </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Task)