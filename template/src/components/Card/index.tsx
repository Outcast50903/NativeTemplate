import React, {FC} from 'react';
import {View} from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card: FC<CardProps> = ({children}) => {
  return (
    <View testID='custom-card-id' className="bg-white rounded-xl w-full max-w-xs p-6 space-y-2">
      {children}
    </View>
  );
};

export default Card;
