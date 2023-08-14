/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./src/utils/reactotron').then(() => {
    console.log('Reactotron Configured');
    LogBox.ignoreLogs(['NativeBase:']);
  });
}

AppRegistry.registerComponent(appName, () => App);
