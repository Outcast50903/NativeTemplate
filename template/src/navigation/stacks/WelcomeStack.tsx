import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';
import StackConfig from 'navigation/config/stackConfig';
import { WelcomeStackParamList } from 'navigation/types';
import LoginScreen from 'screens/Login';
import WelcomeScreen from 'screens/Welcome';

const {Navigator, Screen} = createStackNavigator<WelcomeStackParamList>();

const WelcomeStack = () => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

  return (
    <Navigator initialRouteName="WELCOME_SCREEN_ROUTE" screenOptions={StackConfig(isDarkMode)}>
      <Screen name="WELCOME_SCREEN_ROUTE" component={WelcomeScreen} />
      <Screen name="LOGIN_SCREEN_ROUTE" component={LoginScreen} />
    </Navigator>
  );
};

export default WelcomeStack;
