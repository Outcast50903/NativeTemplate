import { config } from '@tamagui/config'
import { createTamagui } from 'tamagui'

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  type TamaguiCustomConfig = Conf
}

export default tamaguiConfig