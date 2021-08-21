import { Grid, ResponsiveValue } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Property } from 'csstype'

type GridTemplateAreaProps = {
  children: JSX.Element[]
  gridTemplateAreas?: ResponsiveValue<Property.GridTemplateAreas>
  gridTemplateRows?: ResponsiveValue<Property.GridTemplateRows>
  gridTemplateColumns?: ResponsiveValue<Property.GridTemplateColumns>
}

export default function GridTemplateArea({
  children,
  gridTemplateAreas,
  gridTemplateRows,
  gridTemplateColumns,
}: GridTemplateAreaProps): PropsWithChildren<JSX.Element> {
  return (
    <Grid
      as='section'
      gridTemplateAreas={gridTemplateAreas}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
    >
      {children}
    </Grid>
  )
}
