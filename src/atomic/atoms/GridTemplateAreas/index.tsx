import React, { PropsWithChildren } from 'react'

import { Grid, GridProps } from '@chakra-ui/react'

type GridTemplateAreaProps = {
  children: JSX.Element[]
  gridProps?: GridProps
}

export default function GridTemplateArea({
  children,
  gridProps,
}: GridTemplateAreaProps): PropsWithChildren<JSX.Element> {
  return <Grid {...gridProps}>{children}</Grid>
}
