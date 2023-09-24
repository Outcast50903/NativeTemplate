import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';

import WelcomeStack from './stacks/WelcomeStack';
import DrawerNavigator from './DrawerNavigator';

const AppNavigation: FC<DrawerContentComponentProps> = () => {
  const isAuth = AsyncStorage.getItem('isAuth') as unknown as boolean;
  const isDarkMode = useAtomValue(isDarkModeAtom);
  
  return (
    <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        {isAuth ?  <DrawerNavigator /> : <WelcomeStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
