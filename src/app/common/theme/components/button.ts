import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const ButtonTheme: ComponentStyleConfig = {
  // The parts of the component
  parts: [],
  // The base styles for each part
  baseStyle: props => ({
    color: mode('font.primary.200', 'font.primary.800')(props),
  }),
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {
    colorScheme: 'body.primary',
  },
}
