import { Animated } from 'react-native'
import { makeAirship } from 'react-native-airship'
import { H6, Text, View } from 'tamagui'

import { CustomToast } from './customToast'

export const Airship = makeAirship()

const colors = {
  info: ['#0D73DA', '#012A54'],
  success: ['#00B26A', '#033D26'],
  warning: ['#FFA900', '#4C2C00'],
  error: ['#FF3D71', '#4C0B1D'],
  default: ['#012A54', '#012A54'],
}

interface ToastProps {
  type?: keyof typeof colors
  message: string
  title?: string
  config?: {
    opacity?: Animated.Value
    autoHideMs?: number;
    fadeInMs?: number;
    fadeOutMs?: number;
  }
}

export const showToast = ({ 
  type, 
  message,
  title,
  config
}: ToastProps) => {
  const {autoHideMs = 3000, fadeInMs = 300, fadeOutMs = 1000} = config || {}
  const [backgroundColor, colorType] = colors[type || 'default']

  Airship.show(bridge => {
    return (
      <CustomToast bridge={bridge} autoHideMs={autoHideMs} fadeInMs={fadeInMs} fadeOutMs={fadeOutMs} 
        backgroundColor='transparent'>
        <View
          marginTop={8}
          alignSelf='flex-start'
          alignItems='flex-start' 
          backgroundColor={colorType}
          borderLeftColor={backgroundColor}
          borderRadius={8}
          borderLeftWidth={8}
          flexDirection='column' 
          padding={8}
        >
          {title && <H6 fontWeight='bold'>{title}</H6>}
          <Text>{message}</Text>
        </View>
      </CustomToast>
    )
  })
}
