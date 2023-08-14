import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'react-native';

const BottomTheme = (): BottomTabNavigationOptions => {
  const isDarkMode = useColorScheme() === 'dark';

  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';

  return {
    tabBarStyle: {
      backgroundColor: themeColor,
    },
    headerShown: false,
    headerTitle: () => null,
  };
};

export default BottomTheme;
