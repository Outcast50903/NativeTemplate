import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {GoBackArrow} from 'navigation/stacks';

const StackConfig = (isDarkMode: boolean | null): StackNavigationOptions => {
  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';

  return {
    headerBackTitleVisible: false,
    headerTransparent: true,
    headerTitle: () => null,
    headerBackTitle: 'Back',
    cardStyle: {
      paddingHorizontal: 10,
      backgroundColor: themeColor,
    },
    headerLeft: ({label, onPress, canGoBack}) => {
      return canGoBack && (
        <GoBackArrow label={label} onPress={onPress} />
      );
    },
  };
};

export default StackConfig;
