import { beforeEach,describe, expect, it, jest } from '@jest/globals';
import { useNavigation } from '@react-navigation/native';
import { QueryClient,QueryClientProvider, useQuery } from '@tanstack/react-query';
import { render, renderHook, screen, waitFor } from '@testing-library/react-native';

import HomeScreen from '../index';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock('@react-navigation/native');

jest.mock('@tanstack/react-query');

describe('HomeScreen', () => {
  const fact = { text: 'test fact' };
  const data = { fact };

  beforeEach(() => {
    (QueryClient as jest.Mock).mockReturnValue({ refetchQueries: jest.fn() });
    (useNavigation as jest.Mock).mockReturnValue({ navigate: jest.fn() });
    (useQuery as jest.Mock).mockReturnValue({ data, isFetching: true, isError: false, isLoading: false });
  });

  it('should render the screen', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    expect(screen.findByTestId('home-screen')).toBeDefined();
  });

  it('should render a container with a title and a card with a description and two buttons', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    const container = screen.findByTestId('custom-container-id');
    const title = screen.findByText('React-Native Template');
    const description = screen.findByText(
      'This is a template for React-Native projects using TypeScript, TailwindCSS, Tamagui and React-Navigation.'
    );
    const button1 = screen.findByText('Go to Details');
    const button2 = screen.findByText('Login');

    expect(container).toBeDefined();
    expect(title).toBeDefined();
    expect(description).toBeDefined();
    expect(button1).toBeDefined();
    expect(button2).toBeDefined();
  });

  it('should display a fact after fetching data successfully', async () => {
    (useQuery as jest.Mock).mockReturnValue({ data: null, isFetching: false, isError: true, isLoading: false });

    const { result } = renderHook(() => useQuery({}));

    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    await waitFor(() => result.current.data);

    const factText = screen.findByText('test fact');

    expect(factText).toBeDefined();
  });

  it('should display an error message when data fetching fails', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: null, isFetching: false, isError: true, isLoading: false });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    const errorMessage = screen.findByText('Something went wrong');

    expect(errorMessage).toBeDefined();
  });

  it('should display a default message when data is not available', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: null, isFetching: false, isError: false, isLoading: false });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    const defaultMessage = screen.findByText('Something went wrong');

    expect(defaultMessage).toBeDefined();
  });

  it('should display a default message when data is null', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: null, isFetching: false, isError: false, isLoading: false });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <HomeScreen />
      </QueryClientProvider>,
    );

    const defaultMessage = screen.findByText('Something went wrong');

    expect(defaultMessage).toBeDefined();
  });
});
