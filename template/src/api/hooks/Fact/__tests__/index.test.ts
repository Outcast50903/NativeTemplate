import { useQueryClient, useQuery } from '@tanstack/react-query';
import useQueryFact from '../index';

import { it, describe, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { renderHook } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';

jest.mock('@tanstack/react-query');

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