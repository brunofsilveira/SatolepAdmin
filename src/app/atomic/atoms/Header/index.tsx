import { Box, BoxProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type HeaderProps = {
  children?: JSX.Element
  boxProps?: BoxProps
}

export default function Header({
  children,
  boxProps,
}: HeaderProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='header' {...boxProps}>
      {children}
    </Box>
  )
}
