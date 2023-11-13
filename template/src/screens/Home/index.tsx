import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import useQueryFact from 'common/api/hooks/Fact';
import { BottomTabStackParamList, HomeStackParamList } from 'navigation';
import { Button, Card,H3,Text, View, YStack } from 'tamagui';

import { Container } from 'components';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<BottomTabStackParamList & HomeStackParamList>>();
  const { factQuery: { data, isFetching, isLoading } } = useQueryFact();  

  return (
    <Container>
      <YStack testID='home-screen' alignItems='center' justifyContent='center' space={8}>
        <H3 color='black' className="dark:text-white">React-Native Template</H3>
        <Card space={8} animation="bouncy" backgroundColor={'red'} padding={16}>
          <Text color='black' className="text-lg dark:text-white">
            This is a template for React-Native projects using TypeScript,
            TailwindCSS, Tamagui and React-Navigation.
          </Text>
          <Text color='black' className="text-lg dark:text-white">
            It also includes TanStack Query for handle API calls. See more
            details of the libraries here
          </Text>
            <View testID='fact-text' justifyContent='center' alignItems='center'>
              {
                data 
                  ? (<Text >{data.fact}</Text>) 
                  : (isFetching || isLoading) 
                    ? (<Text>Loading...</Text>) 
                    : (<Text>Something went wrong</Text>)
              }
            </View>
          <Button onPress={() => navigation.navigate('DETAILS_SCREEN_ROUTE')}>Go to Details</Button>
          <Button onPress={() => navigation.navigate('LOGIN_SCREEN_ROUTE')}>Login</Button>
        </Card>
      </YStack>
    </Container>
  );
};

export default HomeScreen;
