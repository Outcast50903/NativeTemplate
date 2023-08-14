import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from 'navigation/types';
import {stackTheme} from 'navigation/themes';
import HomeScreen from 'screens/Home';

const {Navigator, Screen} = createStackNavigator<HomeStackParamList>();

const IndicatorStack = () => {
  return (
    <Navigator initialRouteName="HOME" screenOptions={stackTheme}>
      <Screen name="HOME" component={HomeScreen} />
    </Navigator>
  );
};

export default IndicatorStack;
