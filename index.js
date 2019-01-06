/** @format */

import {AppRegistry} from 'react-native';
import App from './src/App';
import Board from './src/Board/Board';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Board);
