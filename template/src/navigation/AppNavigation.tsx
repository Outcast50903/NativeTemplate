import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';

import DrawerNavigator from './DrawerNavigator';

const AppNavigation: FC<DrawerContentComponentProps> = () => {
  const isDarkMode = useAtomValue(isDarkModeAtom);
  
  return (
    <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
