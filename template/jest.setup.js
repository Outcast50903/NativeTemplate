import {render} from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui';

import 'react-native';
export * from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';
import 'whatwg-fetch'

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

export {customRender as render}