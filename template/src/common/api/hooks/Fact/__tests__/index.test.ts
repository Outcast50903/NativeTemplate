import { afterEach,beforeEach, describe, expect, it, jest } from '@jest/globals';
import { useQuery,useQueryClient } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';

import useQueryFact from '../index';

jest.mock('@tanstack/react-query');

jest.mock('react-native-root-toast', () => ({
  show: jest.fn(),
  durations: {
    LONG: 3500,
    SHORT: 2000,
  },
  positions: {
    BOTTOM: 0,
    CENTER: 1,
    TOP: 2,
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(), 
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

describe('useQueryFact', () => {
  const handleFactSelected = jest.fn();
  const queryClient = { setQueryData: jest.fn(), useQueryClient: jest.fn() };
  const fact = { text: 'test fact' };
  const data = { fact };

  beforeEach(() => {
    handleFactSelected(fact);
    (useQueryClient as jest.Mock).mockReturnValue(queryClient);
    (useQuery as jest.Mock).mockReturnValue({ data, isFetching: true, isError: false, isLoading: false });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set fact data on success', async () => {
    const { result } = renderHook(() => useQueryFact());

    expect(result.current.factQuery.isFetching).toBe(true);

    await waitFor(() => result.current.factQuery.isSuccess);

    expect(result.current.factQuery.data).toEqual(data);
    expect(handleFactSelected).toHaveBeenCalledWith(fact);
    expect(result.current.factQuery.isLoading).toBe(false);
  });

  it('should set query data to null on error', async () => {
    const { result } = renderHook(() => useQueryFact());
    result.current.factQuery.isError = true;
    result.current.factQuery.data = undefined;
    queryClient.setQueryData(['fact'], null);

    expect(result.current.factQuery.isFetching).toBe(true);

    await waitFor(() => result.current.factQuery.isError);

    expect(result.current.factQuery.data).toBeUndefined();
    expect(queryClient.setQueryData).toHaveBeenCalledWith(['fact'], null);
    expect(result.current.factQuery.isLoading).toBe(false);
  });
});