import { GlobalStyles, mode } from '@chakra-ui/theme-tools'

export const globalStyles: GlobalStyles = {
  global: props => ({
    body: {
      backgroundColor: mode(
        'body.primary.200',
        'body.primary.800',
      )(props),
    },
  }),
}
