import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';
import {stackConfig} from 'navigation/config';
import {HomeStackParamList} from 'navigation/types';
import HomeScreen from 'screens/Home';

const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();

const IndicatorStack = () => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

  return (
    <Navigator initialRouteName="HOME" screenOptions={stackConfig(isDarkMode)}>
      <Screen name="HOME" component={HomeScreen} />
    </Navigator>
  );
};

export default IndicatorStack;
