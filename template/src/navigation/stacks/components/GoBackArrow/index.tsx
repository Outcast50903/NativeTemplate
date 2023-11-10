import React, {FC} from 'react';
import {Text, TouchableOpacity,View} from 'react-native';
import { GoBackIcon } from 'assets/Svg';
import { isDarkModeAtom } from 'common';
import { useAtomValue } from 'jotai';


interface GoBackArrowProps {
  label: string | undefined;
  onPress: (() => void) | undefined;
}

const GoBackArrow: FC<GoBackArrowProps> = ({onPress, label}) => {
  const textColor = useAtomValue(isDarkModeAtom) ? 'rgb(245 245 245)' : 'rgb(23 23 23)';

  return (
    <View className="flex-1 ml-4 mt-2">
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center space-x-1">
        <GoBackIcon width={30} height={30} color={textColor} />
        <Text className="text-black dark:text-white text-lg">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackArrow;
