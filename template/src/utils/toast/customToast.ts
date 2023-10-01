import { createElement, useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { AirshipToastProps } from 'react-native-airship';

export function CustomToast(props: AirshipToastProps) {
  const { 
    textSize = 14,
    autoHideMs = 3000, 
    backgroundColor = 'white', 
    borderRadius = 1.5 * textSize, 
    bridge, 
    children, 
    fadeInMs = 300, 
    fadeOutMs = 1000, 
    maxWidth = 512, 
    opacity: finalOpacity = 0.9, 
    message, 
    textColor = 'black' 
  } = props;
  
  const opacity = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    let timeout: unknown;
    Animated.timing(opacity, {
      toValue: finalOpacity,
      duration: fadeInMs,
      useNativeDriver: true
    }).start(() => {
      if (autoHideMs > 0) {
        timeout = setTimeout(() => {
          timeout = undefined;
          bridge.resolve(undefined);
        }, autoHideMs);
      }
    });
    bridge.on('clear', () => bridge.resolve(undefined));
    bridge.on('result', () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: fadeOutMs,
        useNativeDriver: true
      }).start(() => bridge.remove());
    });
    return () => {
      if (timeout != null) clearTimeout(timeout as number);
    };
  });
  
  return (
    createElement(Animated.View, { style: {
        alignItems: 'center', 
        alignSelf: 'flex-start',
        backgroundColor,
        borderRadius, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        maxWidth, 
        opacity 
      }}, message != null ? createElement(Text, { style: {
        color: textColor,
        flexShrink: 1,
        fontSize: textSize,
        textAlign: 'center'
      }}, message) : null, children)
  );
}
