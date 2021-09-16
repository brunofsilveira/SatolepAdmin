import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react'

import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { components } from './components/index'
import { fonts } from './fonts'
import { globalStyles } from './globalStyles'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme(
  {
    breakpoints,
    colors,
    components,
    config,
    fonts,
    styles: globalStyles,
  },
  withDefaultColorScheme({ colorScheme: 'body.primary' }),
)

export default theme
