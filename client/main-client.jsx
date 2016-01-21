import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './imports/store'

import Root from './imports/Root.jsx'

Meteor.startup(function () {
  ReactDOM.render(
      <Provider store={store}>
        <Root />
      </Provider>,
      document.getElementById("root")
  );
});