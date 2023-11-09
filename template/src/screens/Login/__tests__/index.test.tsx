import React from 'react';
import {beforeEach,describe, expect, it, jest} from '@jest/globals';
import { useMutation } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';

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
    (useMutation as jest.Mock).mockReturnValue([mockLoginMutation]);
  });

  it('should render the email and password inputs', () => {
    const { getByPlaceholderText } = render(<LoginScreen />);
    
    const emailInput = getByPlaceholderText('Enter your email');
    const passwordInput = getByPlaceholderText('Enter your password');
    
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  // it('should show an error message when email is invalid', async () => {
  //   const { getByPlaceholderText, getByText } = render(<LoginScreen />);
  //   const emailInput = getByPlaceholderText('Enter your email');
  //   const passwordInput = getByPlaceholderText('Enter your password');
  //   const loginButton = getByText('Login');

  //   fireEvent.changeText(emailInput, 'invalid-email');
  //   fireEvent.changeText(passwordInput, 'valid-password');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     const errorMessage = getByText('Invalid email format');
  //     return expect(errorMessage).toBeDefined();
  //   });
  // });

  // it('should show an error message when password is too short', async () => {
  //   const { getByPlaceholderText, getByText } = render(<LoginScreen />);
  //   const emailInput = getByPlaceholderText('Enter your email');
  //   const passwordInput = getByPlaceholderText('Enter your password');
  //   const loginButton = getByText('Login');

  //   fireEvent.changeText(emailInput, 'valid-email@example.com');
  //   fireEvent.changeText(passwordInput, 'short');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     const errorMessage = getByText('Password must be at least 6 characters long');
  //     expect(errorMessage).toBeDefined();
  //   });
  // });

  // it('should call the login mutation with the correct arguments', async () => {
  //   const { getByPlaceholderText, getByText } = render(<LoginScreen />);
  //   const emailInput = getByPlaceholderText('Enter your email');
  //   const passwordInput = getByPlaceholderText('Enter your password');
  //   const loginButton = getByText('Login');

  //   fireEvent.changeText(emailInput, 'valid-email@example.com');
  //   fireEvent.changeText(passwordInput, 'valid-password');
  //   fireEvent.press(loginButton);

  //   await waitFor(() => {
  //     expect(mockLoginMutation).toHaveBeenCalledWith({
  //       email: 'valid-email@example.com',
  //       password: 'valid-password',
  //     });
  //   });
  // });
});