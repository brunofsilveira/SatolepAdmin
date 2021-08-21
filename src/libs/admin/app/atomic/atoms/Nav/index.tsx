import { Box, GridProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type NavProps = {
  children?: JSX.Element
  gridProps?: GridProps
}

export default function Nav({
  children,
  gridProps,
}: NavProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='nav' {...gridProps}>
      {children}
    </Box>
  )
}
