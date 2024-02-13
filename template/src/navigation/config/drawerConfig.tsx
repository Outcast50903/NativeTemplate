import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerNavigationOptions, DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import { DrawerIcon } from 'assets/Svg';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';
import { View } from 'tamagui';


type Props = {
  route: RouteProp<ParamListBase, string>;
  navigation: DrawerNavigationProp<ParamListBase>;
};

const DrawerConfig = ({navigation}: Props): DrawerNavigationOptions => {
  const isDarkMode = useAtomValue(isDarkModeAtom);

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
      <View className="flex-1 ml-4 items-center justify-center" backgroundColor='blue' padding={10}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <DrawerIcon width={30} height={30} color={textColor} />
        </TouchableOpacity>
      </View>
    ),
  };
};

export default DrawerConfig;
