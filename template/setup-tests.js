import {render} from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui';

import 'react-native';

import config from './tamagui.config';

const AllTheProviders = ({children}) => {
  return (
    <TamaguiProvider config={config}>
      {children}
    </TamaguiProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react-native'

export {customRender as render}