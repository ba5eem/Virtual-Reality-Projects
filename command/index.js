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
import Command from './Command';

const store = createStore(reducers);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Command/>
      </Provider>
    );
  }
}




AppRegistry.registerComponent('App', () => App);
