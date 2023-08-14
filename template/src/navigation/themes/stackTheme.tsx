import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {GoBackArrow} from 'navigation/stacks';

const StackTheme = (): StackNavigationOptions => {
  return {
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerTitle: () => null,
    headerBackTitle: 'Back',
    headerLeft: ({label, onPress, canGoBack}) => {
      return canGoBack ? (
        <GoBackArrow label={label} onPress={onPress} />
      ) : (
        <></>
      );
    },
  };
};

export default StackTheme;
