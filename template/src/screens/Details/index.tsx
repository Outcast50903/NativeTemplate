import React from 'react';
import { FlatList } from 'react-native';
import { Text } from 'tamagui';

import {Card, Container} from 'components';

import {Items} from './components';
import data from './data';

const DetailsScreen = () => {
  return (
    <Container>
      <Card>
        <Text color='black' className="text-2xl dark:text-black">Dependencies</Text>
        <Text color='black' className="text-base dark:text-black">
          This project uses the following dependencies:
        </Text>
        <FlatList testID='details-list-id' data={data} renderItem={({item}) => <Items item={item} />} />
      </Card>
    </Container>
  );
};

export default DetailsScreen;
