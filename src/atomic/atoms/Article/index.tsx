import React, { PropsWithChildren } from 'react'

import { Box, GridProps } from '@chakra-ui/react'
import { pxToRem } from '@common/theme/size'

type ArticleProps = {
  children: JSX.Element
  gridProps?: GridProps
}

export default function Article({
  children,
  gridProps,
}: ArticleProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='article' padding={`${pxToRem(25)}`} {...gridProps}>
      {children}
    </Box>
  )
}
