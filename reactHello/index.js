import {AppRegistry} from 'react-360';

// Panels
import TopPosts from './Panels/TopPosts';
import CurrentPost from './Panels/CurrentPost';
import CenterControl from './Panels/Center';
// Model Views
import SubmarineView from './Views/SubmarineView';
import GlobeView from './Views/GlobeView';
import BattleshipView from './Views/BattleshipView';
import IslandView from './Views/IslandView';
import DroneView from './Views/DroneView';

// Fake Redux
import * as Store from './Store';
Store.initialize('API KEY HERE');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('CenterControl', () => CenterControl);


AppRegistry.registerComponent('SubmarineView', () => SubmarineView);
AppRegistry.registerComponent('GlobeView', () => GlobeView);
AppRegistry.registerComponent('BattleshipView', () => BattleshipView);
AppRegistry.registerComponent('IslandView', () => IslandView);
AppRegistry.registerComponent('DroneView', () => DroneView);




// import { AppRegistry } from 'react-360';
// import LeftScreen from './LeftScreen';
// import RightScreen from './RightScreen';
// import CenterScreen from './CenterScreen';
// //import * as Store from './Store';
// //Store.initialize('API KEY HERE');



// AppRegistry.registerComponent('LeftScreen', () => LeftScreen);
// AppRegistry.registerComponent('RightScreen', () => RightScreen);
// AppRegistry.registerComponent('CenterScreen', () => CenterScreen

