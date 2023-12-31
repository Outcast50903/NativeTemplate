/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AppStateStatus, Platform, useColorScheme} from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  focusManager,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { handleDarkModeSelectedAtom } from 'common';
import {useOnlineManager, useStateApp} from 'common/hooks';
import { useSetAtom } from 'jotai';
import {AppNavigation} from 'navigation';
import { TamaguiProvider } from 'tamagui';

import config from './tamagui.config';

const client = new QueryClient();

const App = ({ state, navigation, descriptors }: DrawerContentComponentProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const handleDarkModeSelected = useSetAtom(handleDarkModeSelectedAtom);
  const onAppStateChange = (status: AppStateStatus) =>
    Platform.OS !== 'web' && focusManager.setFocused(status === 'active');

  useOnlineManager();
  useStateApp(onAppStateChange);
  handleDarkModeSelected(isDarkMode);

  return (
    <QueryClientProvider client={client}>
      <TamaguiProvider config={config}>
        <RootSiblingParent>
          <AppNavigation state={state} navigation={navigation} descriptors={descriptors}  />
        </RootSiblingParent>
      </TamaguiProvider>
    </QueryClientProvider>
  );
};

export default App;
