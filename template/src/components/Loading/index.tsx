import React from 'react';
import {Text,View} from 'react-native';

import Container from 'components/Container';

const Loading = () => {
  return (
    <Container>
      <View testID='view-component' className="flex-1 items-center justify-evenly">
        <Text className="text-black dark:text-white text-lg">
          Cargando la información
        </Text>
      </View>
    </Container>
  );
};

export default Loading;
