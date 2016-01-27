import React, { Component, PropTypes } from 'react';

import { setMeteorData } from './actions/taskActions';

export function injectMeteorData(meteorData) {

  return function wrapWithConnect(WrappedComponent) {

    class MeteorDecorator extends Component {

      constructor(props, context) {
        super(props, context)

        if (meteorData) {
          const store = props.store || context.store
          this.getMeteorData(store)
        }
      }

      getMeteorData(store) {
        Tracker.autorun(() => {
          let receivedMeteorData = meteorData(store.getState())
          let result = {
            tasksReady: receivedMeteorData['subscription'].ready(),
            tasks: receivedMeteorData['query'].fetch() || [],
            incompleteCount: TasksModel.find({checked: {$ne: true}}).count()
          };

          store.dispatch(setMeteorData(result))
        })
      }

      render() {
        return <WrappedComponent {...this.props}/>
      }
    }

    MeteorDecorator.displayName = `MeteorData(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
    MeteorDecorator.WrappedComponent = WrappedComponent

    const storeShape = PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    })


    MeteorDecorator.contextTypes = {
      store: storeShape
    }
    MeteorDecorator.propTypes = {
      store: storeShape
    }

    return MeteorDecorator
  }
}