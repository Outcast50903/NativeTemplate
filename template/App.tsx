/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {AppStateStatus, Platform} from 'react-native';
import {useOnlineManager, useStateApp} from 'hooks';
import {AppNavigation} from 'navigation';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const client = new QueryClient();

const App = ({ state, navigation, descriptors }: DrawerContentComponentProps) => {
  const onAppStateChange = (status: AppStateStatus) =>
    Platform.OS !== 'web' && focusManager.setFocused(status === 'active');

  useOnlineManager();
  useStateApp(onAppStateChange);

  return (
    <QueryClientProvider client={client}>
      <AppNavigation state={state} navigation={navigation} descriptors={descriptors}  />
    </QueryClientProvider>
  );
};

export default App;
