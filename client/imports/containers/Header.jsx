import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

import { toggleHideCompleted } from './../actions/taskActions'
import HeaderForm from './HeaderForm.jsx'

export default class Header extends Component {

  getMeteorData() {
    return {
      incompleteCount: TasksModel.find({checked: {$ne: true}}).count()
    }
  }

  render() {
    return (
        <header>

          <h1>Todo List ({this.data.incompleteCount})</h1>

          <label className="hide-completed">
            <input
                type="checkbox"
                readOnly={true}
                checked={this.props.hideCompleted}
                onClick={() => this.props.dispatch(toggleHideCompleted())} />
            Hide Completed Tasks
          </label>

          <HeaderForm />

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
    hideCompleted: state.hideCompleted
  }
}

Header = ReactMixin.onClass(Header, ReactMeteorData);

export default connect(mapStateToProps)(Header)