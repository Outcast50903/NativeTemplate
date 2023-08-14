import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from 'navigation/BottomNavigator';
import DrawerTheme from 'navigation/themes/drawerTheme';
import {DrawerStackParamList} from 'navigation/types';
import React from 'react';
import {CustomDrawerContent} from './components';

const {Navigator, Screen} = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName="BOTTOM_TABS_ROUTES"
      screenOptions={DrawerTheme}
      drawerContent={CustomDrawerContent}>
      <Screen name="BOTTOM_TABS_ROUTES" component={BottomNavigation} />
    </Navigator>
  );
};

export default DrawerNavigator;
