import { Box, ResponsiveValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Property } from 'csstype'

type ArticleProps = {
  children: JSX.Element
  gridArea?: ResponsiveValue<Property.GridArea>
}

export default function Article({
  children,
  gridArea,
}: ArticleProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='article' gridArea={gridArea}>
      {children}
    </Box>
  )
}
