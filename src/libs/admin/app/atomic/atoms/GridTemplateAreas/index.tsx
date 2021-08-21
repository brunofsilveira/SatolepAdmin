import { Grid, GridProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'

type GridTemplateAreaProps = {
  children: JSX.Element[]
  gridProps?: GridProps
}

export default function GridTemplateArea({
  children,
  gridProps,
}: GridTemplateAreaProps): PropsWithChildren<JSX.Element> {
  return (
    <Grid as='section' {...gridProps}>
      {children}
    </Grid>
  )
}
