/* eslint-disable no-unused-vars */
import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface ToastProps extends CustomToastProps {
  type?: ToastType;
}

export interface ToastContextData {
  showToast: (message: ToastProps) => void;
}

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface ToastProviderProps {
  children: ReactNode;
}

export type CustomToastProps = { 
  textSize?: number;
  autoHideMs?: number;
  backgroundColor?: string;
  borderRadius?: number;
  fadeInMs?: number;
  fadeOutMs?: number;
  maxWidth?: number;
  opacity?: number;
  message: string;
  containerTextStyle?: TextStyle;
  containerStyle?: Omit<ViewStyle, 'position'>;
}