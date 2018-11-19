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

// Panels =>
import ConnectedRightPanel from './Panels/RightPanel';
import ConnectedLeftPanel from './Panels/LeftPanel';
import ConnectedCenterPanel from './Panels/CenterPanel';

// Models =>
import ConnectedModelView from './Models/ModelView';


const store = createStore(reducers);


class RightPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRightPanel/>
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

class CenterPanel extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCenterPanel/>
      </Provider>
    );
  }
}


class ModelView extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedModelView/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('RightPanel', () => RightPanel);
AppRegistry.registerComponent('LeftPanel', () => LeftPanel);
AppRegistry.registerComponent('CenterPanel', () => CenterPanel);

// MODELS
AppRegistry.registerComponent('ModelView', () => ModelView);






