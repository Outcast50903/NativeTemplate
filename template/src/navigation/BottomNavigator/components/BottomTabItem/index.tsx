import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {SvgProps} from 'components';
import React, {FC, FunctionComponent} from 'react';
import {Pressable, Text, View, useColorScheme} from 'react-native';

interface DrawerItemProps extends BottomTabBarButtonProps {
  label: string;
  icon: FunctionComponent<SvgProps>;
}

const BottomTabItem: FC<DrawerItemProps> = ({
  onPress,
  icon: Icon,
  accessibilityState,
  label,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const focused = accessibilityState?.selected;

  const CurrentIcon = () => (
    <Icon
      width={30}
      height={30}
      color={isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)'}
    />
  );

  return (
    <Pressable testID={`bottom-tab-${label.toLocaleLowerCase()}`} onPress={onPress} className="flex-1">
      <View className="flex-col space-x-4 flex-1 w-full h-full items-center top-2 bottom-2 active:bg-slate-400">
        <View
          className={`flex-1 justify-center items-center p-4 ${
            focused && 'bg-gray-500 rounded-lg'
          }`}>
          <View>
            <CurrentIcon />
          </View>
          <Text allowFontScaling={false} className="text-black dark:text-white">
            {label}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BottomTabItem;
