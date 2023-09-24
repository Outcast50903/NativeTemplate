import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { bottomConfig } from 'navigation/config';
import {BottomTabStackParamList} from 'navigation/types';

import {BottomItemsArr} from './bottomItems';
import {BottomTabItem} from './components';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabStackParamList>();

const BottomNavigation = () => {
  return (
    <Navigator initialRouteName="HOME_ROUTES" screenOptions={bottomConfig}>
      {BottomItemsArr.flatMap(({key, component, stack, label, icon}) => (
        <Screen
          key={key}
          name={stack}
          component={component}
          options={{
            tabBarButton: props => (
              <BottomTabItem {...props} label={label} icon={icon} />
            ),
          }}
        />
      ))}
    </Navigator>
  );
};

export default BottomNavigation;
