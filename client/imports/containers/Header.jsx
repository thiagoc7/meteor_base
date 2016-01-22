import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTask, toggleHideCompleted } from './../actions/taskActions'
import HeaderForm from './HeaderForm.jsx'

export default class Header extends Component {

  render() {
    const { dispatch, incompleteCount } = this.props;

    return (
        <header>

          <h1>Todo List ({incompleteCount})</h1>

          <label className="hide-completed">
            <input
                type="checkbox"
                readOnly={true}
                checked={this.props.hideCompleted}
                onClick={() => dispatch(toggleHideCompleted())} />
            Hide Completed Tasks
          </label>

          <HeaderForm onAddTask={text => dispatch(addTask(text))} />

        </header>
    )
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hideCompleted: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    hideCompleted: state.hideCompleted,
    incompleteCount: state.meteorData.incompleteCount
  }
}

export default connect(mapStateToProps)(Header)