import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTask } from './../actions/taskActions'

class HeaderForm extends Component {

  onSubmit(e) {
    e.preventDefault();
    let input = this.refs.textInput;
    this.props.dispatch(addTask(input.value));
    input.value = "";
  }

  render() {
    return (
        <form className="new-task" onSubmit={this.onSubmit.bind(this)}>
          <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks" />
        </form>
    )
  }
}

HeaderForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(HeaderForm)