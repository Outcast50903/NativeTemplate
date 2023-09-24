import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WelcomeStackParamList } from 'navigation';
import { Button, Card, H3, Text, YStack } from 'tamagui';

import { Container } from 'components';

const WelcomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<WelcomeStackParamList>>();

  return (
    <Container>
      <YStack alignItems='center' justifyContent='center' space={8}>
        <H3 color='black' className="dark:text-white">
          React-Native Template
        </H3>
        <Card space={8} animation="bouncy" backgroundColor={'coral'} padding={16}>
          <Text color='black' className="text-lg dark:text-white">
            This is a template for React-Native projects using TypeScript,
            TailwindCSS, and React-Navigation.
          </Text>
          <Text color='black' className="text-lg dark:text-white">
            It also includes TanStack Query for handle API calls. See more
            details of the libraries here
          </Text>
          <Button onPress={() => navigation.navigate('LOGIN_SCREEN_ROUTE')}>Login</Button>
        </Card>
      </YStack>
    </Container>
  );
};

export default WelcomeScreen;