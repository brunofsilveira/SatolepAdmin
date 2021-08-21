import { Box, BoxProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type ArticleProps = {
  children: JSX.Element
  boxProps?: BoxProps
}

export default function Article({
  children,
  boxProps,
}: ArticleProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='article' {...boxProps}>
      {children}
    </Box>
  )
}
