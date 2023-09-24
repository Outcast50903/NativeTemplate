import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from 'navigation/BottomNavigator';
import DrawerConfig from 'navigation/config/drawerConfig';
import {DrawerStackParamList} from 'navigation/types';

import {CustomDrawerContent} from './components';

const {Navigator, Screen} = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName="BOTTOM_TABS_ROUTES"
      screenOptions={DrawerConfig}
      drawerContent={CustomDrawerContent}>
      <Screen name="BOTTOM_TABS_ROUTES" component={BottomNavigation} />
    </Navigator>
  );
};

export default DrawerNavigator;
