import React from 'react';
import {AppRegistry} from 'react-360';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Panels
import TopPosts from './Panels/TopPosts';
import CurrentPost from './Panels/CurrentPost';
import CenterControl from './Panels/Center';
// Model Views
import ConnectedSubmarineView from './Views/SubmarineView';
import GlobeView from './Views/GlobeView';
import BattleshipView from './Views/BattleshipView';
import IslandView from './Views/IslandView';
import DroneView from './Views/DroneView';
//import CenterControl from './Views/GlobeView';


const store = createStore(reducers);
// Fake Redux
import * as Store from './Store';
Store.initialize('API KEY HERE');



class Submarine extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedSubmarineView/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('CenterControl', () => CenterControl);


AppRegistry.registerComponent('SubmarineView', () => Submarine);
// AppRegistry.registerComponent('GlobeView', () => GlobeView);
// AppRegistry.registerComponent('BattleshipView', () => BattleshipView);
// AppRegistry.registerComponent('IslandView', () => IslandView);
// AppRegistry.registerComponent('DroneView', () => DroneView);




// import { AppRegistry } from 'react-360';
// import LeftScreen from './LeftScreen';
// import RightScreen from './RightScreen';
// import CenterScreen from './CenterScreen';
// //import * as Store from './Store';
// //Store.initialize('API KEY HERE');



// AppRegistry.registerComponent('LeftScreen', () => LeftScreen);
// AppRegistry.registerComponent('RightScreen', () => RightScreen);
// AppRegistry.registerComponent('CenterScreen', () => CenterScreen

