import React from 'react';
import {render} from '@testing-library/react-native';
import { Text, View } from 'react-native';
import Container from '../index';
import {it, describe, expect} from '@jest/globals';
import '@testing-library/jest-native/extend-expect';

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
    const {queryAllByText} = render(<Container />);
    expect(queryAllByText(/.*/)).toHaveLength(0);
  });
});