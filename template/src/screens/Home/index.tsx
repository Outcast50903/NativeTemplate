import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import useQueryFact from 'api/hooks/Fact';
import { Button, Card, Container } from 'components';
import { BottomTabStackParamList } from 'navigation';
import { useAtomValue } from 'jotai';
import { factSelectedAtom } from 'atoms';
import { Text, View } from 'tamagui';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<BottomTabStackParamList>>();
  const fact = useAtomValue(factSelectedAtom);
  const {factQuery} = useQueryFact();

  return (
    <Container>
      <View className="text-justify flex-1">
        <Text className="text-2xl text-center mb-2 dark:text-white">
          React-Native Template
        </Text>
        <Card>
          <Text color='black' className="text-lg">
            This is a template for React-Native projects using TypeScript,
            TailwindCSS, and React-Navigation.
          </Text>
          <Text className="mt-3 text-lg">
            It also includes TanStack Query for handle API calls. See more
            details of the libraries here
          </Text>
          <Button
            onPress={() => navigation.navigate('DETAILS')}
            text="Go to Details"
            custom={{
              text: 'text-white',
              background: 'bg-blue-500',
              activeBackground: 'bg-blue-700',
            }}
          />
          <Text testID='api-fact-id' className="text-slate-900 text-sm font-thin text-center mt-3">
            {
              factQuery.isFetching || factQuery.isError
                ? 'Loading...'
                : fact
            }
          </Text>
        </Card>
      </View>
    </Container>
  );
};

export default HomeScreen;
