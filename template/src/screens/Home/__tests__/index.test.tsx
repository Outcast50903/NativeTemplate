/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {describe, expect,it} from '@jest/globals';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render} from '@testing-library/react-native';

import HomeScreen from '..';

describe('HomeScreen', () => {
  const queryClient = new QueryClient();

  it('renders the title', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </QueryClientProvider>,
    );
    const title = getByText('React-Native Template');
    expect(title).toBeDefined();
  });

  it('renders the description', () => {
    const {getByText} = render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </QueryClientProvider>,
    );
    const description = getByText(
      'This is a template for React-Native projects using TypeScript, TailwindCSS, and React-Navigation.',
    );
    expect(description).toBeDefined();
  });
});
