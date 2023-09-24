import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';

const BottomConfig = (): BottomTabNavigationOptions => {
  const isDarkMode = useAtomValue(isDarkModeAtom);;

  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';

  return {
    tabBarStyle: {
      backgroundColor: themeColor,
    },
    headerShown: false,
    headerTitle: () => null,
  };
};

export default BottomConfig;
