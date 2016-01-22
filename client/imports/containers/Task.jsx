import React, { Component, PropTypes } from 'react';

class Task extends Component {

  render() {
    const { task, onToggleChecked, onDeleteThisTask } = this.props;
    const taskClassName = task.checked ? "checked" : "";

    return (
        <li className={taskClassName}>
          <button className="delete" onClick={() => onDeleteThisTask(task)}>
            &times;
          </button>

          <input
              type="checkbox"
              readOnly={true}
              checked={task.checked}
              onClick={() => onToggleChecked(task)} />

          <span className="text">{task.text}</span>
        </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onToggleChecked: PropTypes.func.isRequired,
  onDeleteThisTask: PropTypes.func.isRequired
};

export default Task;