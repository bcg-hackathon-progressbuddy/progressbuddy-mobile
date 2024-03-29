/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import config from './config.json';

console.info('Config:', config);

AppRegistry.registerComponent(appName, () => App);
