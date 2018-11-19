import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ConnectedCommand from './Command';
import ConnectedLeftPanel from './LeftPanel';

const store = createStore(reducers);


class Command extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCommand/>
      </Provider>
    );
  }
}

class LeftPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedLeftPanel/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('Command', (props) => Command);
AppRegistry.registerComponent('LeftPanel', (props) => LeftPanel);