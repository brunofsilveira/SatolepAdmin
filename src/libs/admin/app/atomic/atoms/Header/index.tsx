import { Box, ResponsiveValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Property } from 'csstype'

type HeaderProps = {
  children?: JSX.Element
  gridArea?: ResponsiveValue<Property.GridArea>
}

export default function Header({
  children,
  gridArea,
}: HeaderProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='header' gridArea={gridArea}>
      {children}
    </Box>
  )
}
