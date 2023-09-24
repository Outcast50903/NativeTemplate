import React from 'react';
import {Text} from 'react-native';
import {describe, expect,it} from '@jest/globals';
import {render} from '@testing-library/react-native';

import List from '../index';

describe('List component', () => {
  const data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'},
  ];

  const renderItem = ({item}: {item: {id: number; name: string}}) => <Text>{item.name}</Text>;

  it('should render the list correctly', () => {
    const {getByText} = render(<List data={data} renderItem={renderItem} />);

    expect(getByText('John')).toBeDefined();
    expect(getByText('Jane')).toBeDefined();
    expect(getByText('Bob')).toBeDefined();
  });

  it('should render an empty list', () => {
    const {queryAllByTestId} = render(<List data={[]} renderItem={() => null} />);

    expect(queryAllByTestId('list-item')).toHaveLength(0);
  });

  it('should render the list correctly with null data', () => {
    const {queryAllByTestId} = render(<List data={null} renderItem={() => null} />);

    expect(queryAllByTestId('list-item')).toHaveLength(0);
  });

  it('should render the list correctly with undefined data', () => {
    const {queryByText} = render(<List data={undefined} renderItem={() => null} />);

    expect(queryByText('John')).toBeNull();
    expect(queryByText('Jane')).toBeNull();
    expect(queryByText('Bob')).toBeNull();
  });

  it('should render the list correctly with null renderItem function', () => {
    const {queryAllByTestId} = render(
      <List
        data={[
          {id: 1, name: 'John'},
          {id: 2, name: 'Jane'},
          {id: 3, name: 'Bob'},
        ]}
        renderItem={null}
      />,
    );

    expect(queryAllByTestId('list-item')).toHaveLength(0);
  });

  it('should render the list with default renderItem function', () => {
    const {queryAllByTestId} = render(
      <List
        data={[
          {id: 1, name: 'John'},
          {id: 2, name: 'Jane'},
          {id: 3, name: 'Bob'},
        ]}
      />,
    );

    expect(queryAllByTestId('list-item')).toHaveLength(0);
  });

  it('should render the list with the correct data and renderItem function', () => {
    const {getByText} = render(<List data={data} renderItem={renderItem} />);
    expect(getByText('John')).toBeDefined();
    expect(getByText('Jane')).toBeDefined();
    expect(getByText('Bob')).toBeDefined();
  });

  it('should pass data and renderItem props to FlatList component', () => {
    const {getByText} = render(<List data={data} renderItem={renderItem} />);
    expect(getByText('John')).toBeDefined();
    expect(getByText('Jane')).toBeDefined();
    expect(getByText('Bob')).toBeDefined();
  });
});
