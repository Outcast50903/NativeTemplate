import {SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {DrawerItemsArr} from 'navigation/DrawerNavigator/drawerItems';
import DrawerItem from '../DrawerItem';

const CustomDrawerContent: FC<DrawerContentComponentProps> = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <DrawerContentScrollView>
        <View className="flex-1 space-y-2 px-5 pb-10 android:mt-5">
          {DrawerItemsArr.map(({icon, label, key, stack, screen}) => (
            <View key={key}>
              <DrawerItem
                icon={icon}
                label={label}
                onPress={() => navigation.navigate(stack, {screen})}
              />
            </View>
          ))}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
