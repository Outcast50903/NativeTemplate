import React, {FC, FunctionComponent} from 'react';
import {Pressable, Text,View} from 'react-native';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';

import {SvgProps} from 'components';

interface DrawerItemProps {
  label: string;
  icon: FunctionComponent<SvgProps>;
  onPress: () => void;
}

const DrawerItem: FC<DrawerItemProps> = ({icon: Icon, label, onPress}) => {
  const isDarkMode = useAtomValue(isDarkModeAtom)

  const CurrentIcon = () => (
    <Icon
      width={30}
      height={30}
      color={isDarkMode ? 'rgb(245 245 245)' : 'rgb(23 23 23)'}
    />
  );
  
  return (
    <Pressable onPress={onPress}>
      <View className="flex-row space-x-4 flex-1 w-full h-full items-center">
        <CurrentIcon />
        <Text className="text-black dark:text-white text-2xl">{label}</Text>
      </View>
    </Pressable>
  );
};

export default DrawerItem;
