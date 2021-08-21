import { Box, GridProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type HeaderProps = {
  children?: JSX.Element
  gridProps?: GridProps
}

export default function Header({
  children,
  gridProps,
}: HeaderProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='header' {...gridProps}>
      {children}
    </Box>
  )
}
