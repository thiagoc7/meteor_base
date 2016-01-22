import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class HeaderForm extends Component {

  onSubmit(e) {
    e.preventDefault();
    let input = this.refs.textInput;
    this.props.onAddTask(input.value);
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
  onAddTask: PropTypes.func.isRequired
};

export default HeaderForm;