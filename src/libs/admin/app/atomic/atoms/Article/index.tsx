import { Box, GridProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type ArticleProps = {
  children: JSX.Element
  gridProps?: GridProps
}

export default function Article({
  children,
  gridProps,
}: ArticleProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='article' {...gridProps}>
      {children}
    </Box>
  )
}
