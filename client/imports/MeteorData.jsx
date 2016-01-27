import React, { Component, PropTypes } from 'react';
import ReactMixin from 'react-mixin';
import { connect } from 'react-redux';

import { setMeteorData } from './actions/taskActions';

class MeteorData extends Component {

  getMeteorData() {
    let query = {};
    if (this.props.hideCompleted) {
      query = {checked: {$ne: true}}
    }

    const taskSub = Meteor.subscribe('tasks');

    let result = {
      //tasksReady: taskSub.ready(),
      //tasks: TaskModel.find(query, {sort: {createdAt: -1}}).fetch() || [],
      incompleteCount: TasksModel.find({checked: {$ne: true}}).count()
    };

    this.props.dispatch(setMeteorData(result));
    return result;
  }

  render() {
    return <div></div>
  }
}

MeteorData.propTypes = {
  hideCompleted: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  return {
    hideCompleted: state.hideCompleted
  }
}

MeteorData = ReactMixin.onClass(MeteorData, ReactMeteorData);

export default connect(mapStateToProps)(MeteorData);