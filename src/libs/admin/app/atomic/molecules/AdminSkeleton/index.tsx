import { pxToRem } from '@libs/admin/app/common/utils'
import React, { PropsWithChildren } from 'react'
import Article from '../../atoms/Article'
import GridTemplateArea from '../../atoms/GridTemplateAreas'
import Header from '../../atoms/Header'
import Nav from '../../atoms/Nav'

type AdminSkeletonProps = {
  children: JSX.Element
}

export default function AdminSkeleton({
  children,
}: AdminSkeletonProps): PropsWithChildren<JSX.Element> {
  return (
    <GridTemplateArea
      gridProps={{
        gridTemplateAreas: "'header header' 'nav article'",
        gridTemplateRows: `${pxToRem(60)} 1fr`,
        gridTemplateColumns: `${pxToRem(250)} 1fr`,
      }}
    >
      <Header gridProps={{ gridArea: 'header' }} />
      <Nav gridProps={{ gridArea: 'nav' }} />
      <Article gridProps={{ gridArea: 'article' }}>
        {children}
      </Article>
    </GridTemplateArea>
  )
}
