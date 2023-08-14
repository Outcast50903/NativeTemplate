import {SvgProps} from 'components';
import React, {FC, FunctionComponent} from 'react';
import {View, Text, Pressable, useColorScheme} from 'react-native';

interface DrawerItemProps {
  label: string;
  icon: FunctionComponent<SvgProps>;
  onPress: () => void;
}

const DrawerItem: FC<DrawerItemProps> = ({icon: Icon, label, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

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
