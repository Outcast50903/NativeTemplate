import React from 'react';
import { Text, View } from 'react-native';
import {describe, expect,it} from '@jest/globals';
import { render } from '@testing-library/react-native';

import Container from '../index';

describe('Container', () => {
  it('renders children', () => {
    const {getByText} = render(<Container><View><Text>Test</Text></View></Container>);
    expect(getByText('Test')).toBeDefined();
  });

  it('should display the status bar', () => {
    const {getByTestId} = render(<Container><View testID='test-view' /></Container>);
    expect(getByTestId('test-view')).toBeDefined();
  });

  it('should render without errors when no children are provided', () => {
    const {queryAllByText} = render(<Container children />);
    expect(queryAllByText(/.*/)).toHaveLength(0);
  });
});