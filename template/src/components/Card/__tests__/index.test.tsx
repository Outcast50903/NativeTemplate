import React from 'react';
import {render} from '@testing-library/react-native';
import { Text } from 'react-native';
import Card from '..';

import {it, describe, expect} from '@jest/globals';

describe('Card', () => {
  it('renders its children', () => {
    const {getByText} = render(<Card><Text>Test Content</Text></Card>);
    expect(getByText('Test Content')).toBeDefined();
  });
});