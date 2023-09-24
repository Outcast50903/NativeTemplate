import React from 'react';
import {describe, expect, it, jest} from '@jest/globals';
import {fireEvent,render} from '@testing-library/react-native';

import Button from '../index';

describe('Button', () => {
  it('renders correctly with default props', () => {
    const {getByText} = render(<Button onPress={() => console.log('Button pressed')} text="Press me" />);

    expect(getByText('Press me')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Button onPress={onPress} text="Press me" />);

    fireEvent.press(getByText('Press me'));

    expect(onPress).toHaveBeenCalled();
  });

  it('should render without errors', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const {queryByText} = render(<Button />);

    expect(queryByText('')).toBeDefined();
  });

  it('should render with empty text', () => {
    const {getByText} = render(<Button onPress={() => console.log('Button pressed')} text='' />);

    expect(getByText('')).toBeDefined();
  });
});