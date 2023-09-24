import React, {FC} from 'react';
import {Pressable,Text} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  custom?: {
    background?: string;
    text?: string;
    activeBackground?: string;
  };
}

const Button: FC<ButtonProps> = ({onPress, text, custom: style}) => {
  return (
    <Pressable
      testID='custom-button-id'
      className={
        `h-12 px-4 items-center justify-center rounded-lg mt-2 ${style?.background} active:${style?.activeBackground}`
      }
      onPress={onPress}>
      <Text className={`font-bold ${style?.text}`} selectable={false}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
