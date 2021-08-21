import { Box, ResponsiveValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Property } from 'csstype'

type NavProps = {
  children?: JSX.Element
  gridArea?: ResponsiveValue<Property.GridArea>
}

export default function Nav({
  children,
  gridArea,
}: NavProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='nav' gridArea={gridArea}>
      {children}
    </Box>
  )
}
