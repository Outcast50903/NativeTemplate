import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useActionsAuth } from 'common';
import { factSelectedAtom } from 'common/atoms';
import { useAtomValue } from 'jotai';
import { BottomTabStackParamList } from 'navigation';
import { Button, Card,Text, View } from 'tamagui';

import { Container } from 'components';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<BottomTabStackParamList>>();
  const { dispatchLogout } = useActionsAuth();
  // const fact = useAtomValue(factSelectedAtom);

  return (
    <Container>
      <View flex={1}>
        <Card>
          <Text color='black' className="text-lg">
            This is a template for React-Native projects using TypeScript,
            TailwindCSS, and React-Navigation.
          </Text>
          <Button onPress={() => navigation.navigate('DETAILS')}>Go to Details</Button>
          <Button onPress={() => dispatchLogout()}>Cerrar Sesión</Button>
        </Card>
      </View>
    </Container>
  );
};

export default HomeScreen;
