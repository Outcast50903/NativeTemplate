import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';
import {stackConfig} from 'navigation/config';
import {HomeStackParamList} from 'navigation/types';
import HomeScreen from 'screens/Home';
import LoginScreen from 'screens/Login';

const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

  return (
    <Navigator initialRouteName="HOME_SCREEN_ROUTE" screenOptions={stackConfig(isDarkMode)}>
      <Screen name="HOME_SCREEN_ROUTE" component={HomeScreen} />
      <Screen name="LOGIN_SCREEN_ROUTE" component={LoginScreen} />
    </Navigator>
  );
};

export default HomeStack;
