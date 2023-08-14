import React, {FC} from 'react';
import {StatusBar, View, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View 
        testID='custom-container-id' 
        className="flex-1 bg-neutral-100 w-full h-full justify-center items-center px-2 text-black 
        dark:text-white dark:bg-neutral-900">
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
