import React from 'react';
import {View, useColorScheme} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerNavigationOptions} from '@react-navigation/drawer';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {DrawerIcon} from 'components';

type Props = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
};

const DrawerTheme = ({navigation}: Props): DrawerNavigationOptions => {
  const isDarkMode = useColorScheme() === 'dark';

  const themeColor = isDarkMode ? 'rgb(23 23 23)' : 'rgb(245 245 245)';
  const textColor = isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)';

  return {
    headerStyle: {
      backgroundColor: themeColor,
    },
    headerTintColor: textColor,
    drawerStyle: {
      backgroundColor: themeColor,
    },
    drawerInactiveTintColor: textColor,
    headerTitle: () => null,
    headerLeft: () => (
      <View className="flex-1 ml-4 items-center justify-center">
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <DrawerIcon width={30} height={30} color={textColor} />
        </TouchableOpacity>
      </View>
    ),
  };
};

export default DrawerTheme;
