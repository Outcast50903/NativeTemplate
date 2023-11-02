import React from 'react';
import { FlatList } from 'react-native';
import { Card, Text, YStack } from 'tamagui';

import { Container } from 'components';

import {Items} from './components';
import data from './data';

const DetailsScreen = () => {
  return (
    <Container>
      <YStack alignItems='center' justifyContent='center' space={8}>
        <Card backgroundColor="red" padded>
          <Text color='black' className="text-2xl dark:text-black">Dependencies</Text>
          <Text color='black' className="text-base dark:text-black">
            This project uses the following dependencies:
          </Text>
          <FlatList testID='details-list-id' data={data} renderItem={({item}) => <Items item={item} />} />
        </Card>
      </YStack>
    </Container>
  );
};

export default DetailsScreen;
