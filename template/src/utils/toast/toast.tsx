import { FC, useEffect, useRef } from 'react';
import { Animated, Text, useWindowDimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useAtomValue } from 'jotai';

import { isActiveAtom } from './toast.atom';
import { CustomToastProps } from './types';

const Toast: FC<CustomToastProps> = ({
  autoHideMs = 3000,
  textSize = 14,
  backgroundColor = 'white',
  borderRadius = 1.5 * textSize,
  maxWidth = 512,
  message,
  containerTextStyle,
  containerStyle,
}) => {
  const isVisible = useAtomValue(isActiveAtom);
  const { width } = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    Animated.sequence([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          easing: Easing.linear,
          delay: 0,
          duration: autoHideMs,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          easing: Easing.linear,
          delay: 1000,
          duration: autoHideMs,
          useNativeDriver: true,
        }
      )
    ]).start();
  }, [isVisible]);

  return (
    <Animated.View style={{
      alignItems: 'center', 
      alignSelf: 'center',
      backgroundColor,
      borderRadius, 
      flexDirection: 'row', 
      justifyContent: 'center', 
      maxWidth, 
      padding: 16,
      position: 'absolute',
      right: '10%',
      left: width * 0.2,
      zIndex: 999,
      width: '60%',
      top: 30,
      display: isVisible ? 'flex' : 'none',
      opacity: fadeAnim,
      ...containerStyle,
    }}>
        <Text style={{
          flexShrink: 1,
          fontSize: textSize,
          textAlign: 'center',
          ...containerTextStyle
        }}>
          {message}
        </Text>
    </Animated.View>
  );
}

export default Toast;
