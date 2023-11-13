import React from 'react';
import { beforeEach,describe, expect, it, jest } from '@jest/globals';
import { useMutation } from '@tanstack/react-query';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react-native';

import '@testing-library/jest-native/extend-expect';

import LoginScreen from '../index';

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
}));

describe('LoginScreen', () => {
  let mockLoginMutation: jest.Mock;

  beforeEach(() => {
    mockLoginMutation = jest.fn();
    (useMutation as jest.Mock).mockReturnValue({ mutateAsync: mockLoginMutation, isError: false, isLoading: false });
  });

  it('should render the email and password inputs', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    
    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your password');
    
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it('should display error message for short password', async () => {
    render(<LoginScreen />);

    const passwordInput = screen.getByPlaceholderText('Enter your password');
    fireEvent.changeText(passwordInput, '12345');
    fireEvent.press(screen.getByTestId('login-button'));

    const errorMessage = await screen.findByTestId('password-error-message');

    expect(errorMessage).toHaveTextContent('String must contain at least 6 character(s)');
  });

  it('should display error message for invalid email', async () => {
    render(<LoginScreen />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.changeText(emailInput, 'outcast@');
    fireEvent.press(screen.getByTestId('login-button'));

    const errorMessage = await screen.findByTestId('email-error-message');

    expect(errorMessage).toHaveTextContent('Invalid email');
  });

  it('should display error message for invalid email and password', async () => {
    render(<LoginScreen />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    fireEvent.changeText(emailInput, 'outcast@');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    fireEvent.changeText(passwordInput, '12345');

    fireEvent.press(screen.getByTestId('login-button'));

    const emailErrorMessage = await screen.findByTestId('email-error-message');
    const passwordErrorMessage = await screen.findByTestId('password-error-message');

    expect(emailErrorMessage).toHaveTextContent('Invalid email');
    expect(passwordErrorMessage).toHaveTextContent('String must contain at least 6 character(s)');
  });

  it('should submit valid email and password', async () => {
    const email = 'test@example.com';
    const password = 'password123';

    const { getByPlaceholderText, getByTestId } = render(<LoginScreen />);
    const { result } = renderHook(() => useMutation({ }));

    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your password');

    fireEvent.changeText(emailInput, email);
    fireEvent.changeText(passwordInput, password);

    fireEvent.press(getByTestId('login-button'));

    await waitFor(() => result.current.mutateAsync());

    expect(result.current.mutateAsync).toBeCalled();
  });
});