import React from 'react';
import { Text } from 'react-native';
import {describe, expect,it} from '@jest/globals';
import {render} from '@testing-library/react-native';

import Card from '..';

describe('Card', () => {
  it('renders its children', () => {
    const {getByText} = render(<Card><Text>Test Content</Text></Card>);
    expect(getByText('Test Content')).toBeDefined();
  });
});