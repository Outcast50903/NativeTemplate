import { afterEach,beforeEach, describe, expect, it, jest } from '@jest/globals';
import { useMutation } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';

import { useMutationLogin } from '..';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

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

describe('useMutationLogin', () => {
  const handleFactSelected = jest.fn();
  const queryClient = { setQueryData: jest.fn(), useQueryClient: jest.fn() };
  const auth = { text: 'test auth' };
  const data = { auth };

  beforeEach(() => {
    handleFactSelected(auth);
    (useMutation as jest.Mock).mockReturnValue({ data, isError: false, isLoading: false });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set auth data on success', async () => {
    const { result } = renderHook(() => useMutationLogin());

    expect(result.current.loginMutation.isLoading).toBe(false);

    await waitFor(() => result.current.loginMutation.isSuccess);

    expect(result.current.loginMutation.data).toEqual(data);
    expect(handleFactSelected).toHaveBeenCalledWith(auth);
    expect(result.current.loginMutation.isLoading).toBe(false);
  });

  it('should set query data to null on error', async () => {
    const { result } = renderHook(() => useMutationLogin());
    result.current.loginMutation.isError = true;
    result.current.loginMutation.data = undefined;
    queryClient.setQueryData(['auth'], null);

    expect(result.current.loginMutation.isLoading).toBe(false);

    await waitFor(() => result.current.loginMutation.isError);

    expect(result.current.loginMutation.data).toBeUndefined();
    expect(queryClient.setQueryData).toHaveBeenCalledWith(['auth'], null);
    expect(result.current.loginMutation.isLoading).toBe(false);
  });
});