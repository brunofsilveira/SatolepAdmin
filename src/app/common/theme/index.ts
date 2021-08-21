import { extendTheme, ThemeConfig } from '@chakra-ui/react'

import { breakpoints } from './breakpoints';
import { fonts } from './fonts'

const config: ThemeConfig = {
  useSystemColorMode: true,
}

const overrides = extendTheme({
  breakpoints,
  config,
  fonts,
})

export default extendTheme(overrides)
