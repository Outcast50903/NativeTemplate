import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

interface ListProps<T> {
  data: Array<T>;
  renderItem: ListRenderItem<T>;
}

function List<T>({data, renderItem}: ListProps<T>) {
  return (
    <View className="flex-1 p-2 w-full">
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;
