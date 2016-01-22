import React from 'react'

import Header from './containers/Header.jsx'
import Tasks from './containers/Tasks.jsx'
import MeteorData from './MeteorData.jsx'

const Root = () => {
  return (
      <div className="container">
        <Header />
        <Tasks />
        <MeteorData />
      </div>
  );
};

export default Root;