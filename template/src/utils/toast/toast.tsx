import { FC, useEffect, useRef } from 'react';
import { Animated, Text, useWindowDimensions } from 'react-native';
import { useAtomValue } from 'jotai';

import { isActiveAtom } from './toast.atom';
import { CustomToastProps } from './types';

const Toast: FC<CustomToastProps> = ({
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
  const slideAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
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
      transform: [
        { translateY: slideAnim.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 10]
          })
        }
      ],
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
