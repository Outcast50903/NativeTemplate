import React, {FC, FunctionComponent} from 'react';
import { Pressable } from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import { SvgProps } from 'assets/Svg';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';
import { Text, View } from 'tamagui';


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
  const isDarkMode = useAtomValue(isDarkModeAtom);
  const focused = accessibilityState?.selected;

  const CurrentIcon = () => (
    <Icon
      width={30}
      height={30}
      color={focused ? 'red' : isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)'}
    />
  );

  return (
    <Pressable testID={`bottom-tab-${label.toLocaleLowerCase()}`} onPress={onPress} className="flex-1">
      <View flexDirection='column' flex={1} alignItems='center' space={4} spaceDirection='horizontal'>
        <View flex={1} justifyContent='center' alignItems='center' space={4} spaceDirection='vertical'>
          <View>
            <CurrentIcon />
          </View>
          <Text allowFontScaling={false} color={focused ? 'red' : isDarkMode ? 'white' : 'black'}>
            {label}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BottomTabItem;
