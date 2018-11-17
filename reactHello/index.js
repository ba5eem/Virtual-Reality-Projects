// import { AppRegistry } from 'react-360';
// import LeftScreen from './LeftScreen';
// import RightScreen from './RightScreen';
// import CenterScreen from './CenterScreen';
// //import * as Store from './Store';
// //Store.initialize('API KEY HERE');



// AppRegistry.registerComponent('LeftScreen', () => LeftScreen);
// AppRegistry.registerComponent('RightScreen', () => RightScreen);
// AppRegistry.registerComponent('CenterScreen', () => CenterScreen


import {AppRegistry} from 'react-360';
import TopPosts from './TopPosts';
import CurrentPost from './CurrentPost';
import SubmarineView from './SubmarineView';
import * as Store from './Store';
Store.initialize('API KEY HERE');

AppRegistry.registerComponent('TopPosts', () => TopPosts);
AppRegistry.registerComponent('CurrentPost', () => CurrentPost);
AppRegistry.registerComponent('SubmarineView', () => SubmarineView);