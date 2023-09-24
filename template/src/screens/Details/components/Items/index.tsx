import React, {FC} from 'react';
import { Text, View } from 'tamagui';

interface ItemProps {
  item: {key: string};
}

const Item: FC<ItemProps> = ({item: {key}}) => {
  return (
    <View testID='details-item-component-id' className="mb-2">
      <Text color='black' className="text-lg dark:text-black">{`\u2022 ${key}`}</Text>
    </View>
  );
};

export default Item;
