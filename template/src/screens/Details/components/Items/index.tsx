import {View, Text} from 'react-native';
import React, {FC} from 'react';

interface ItemProps {
  item: {key: string};
}

const Item: FC<ItemProps> = ({item: {key}}) => {
  return (
    <View testID='details-item-component-id' className="mb-2">
      <Text className="text-lg dark:text-black">{`\u2022 ${key}`}</Text>
    </View>
  );
};

export default Item;
