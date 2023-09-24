import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { View } from 'tamagui';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
      <View 
        testID='custom-container-id'
        flex={1}
        space={4}
        className="bg-neutral-100 justify-center items-center px-2 text-black dark:text-white dark:bg-neutral-900">
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
