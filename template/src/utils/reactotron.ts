import Reactotron from 'reactotron-react-native';
// import {QueryClientManager} from 'reactotron-react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Tron} from '../../global';
// import {queryClient} from '../api';

// const queryClientManager = new QueryClientManager({
//   queryClient,
// });

// Reactotron.setAsyncStorageHandler?.(AsyncStorage)
//   .configure({
//     host: '',
//     onDisconnect: () => {
//       queryClientManager.unsubscribe();
//     },
//   })
//   .useReactNative()
//   .connect();

Reactotron.setAsyncStorageHandler!(AsyncStorage)
  // AsyncStorage would either come from `react-native` or
  // `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron as unknown as Tron;
