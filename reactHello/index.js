import {AppRegistry} from 'react-360';
import LeftScreen from './LeftScreen';
import RightScreen from './RightScreen';
import CenterScreen from './CenterScreen';
//import * as Store from './Store';
//Store.initialize('API KEY HERE');

AppRegistry.registerComponent('LeftScreen', () => LeftScreen);
AppRegistry.registerComponent('RightScreen', () => RightScreen);
AppRegistry.registerComponent('CenterScreen', () => CenterScreen);