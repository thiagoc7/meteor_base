import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import increaseAction from './../actions/taskActions';

class Counter extends React.Component {
  render () {
    const { value, onIncreaseClick } = this.props;
    return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
};

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);