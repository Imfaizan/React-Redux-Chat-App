import React, { Component } from 'react';
import _ from 'lodash';

import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';
import store from './store';

const App = () => {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
