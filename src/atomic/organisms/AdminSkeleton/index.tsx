import React, { PropsWithChildren, useState } from 'react'

import { pxToRem } from '@common/theme/size'

import Article from '../../atoms/Article'
import GridTemplateArea from '../../atoms/GridTemplateAreas'
import Header from '../../atoms/Header'
import Nav, { Category } from '../../molecules/Nav'

type AdminSkeletonProps = {
  categories?: Category[]
  children: JSX.Element
  title?: string
}

const headerHeight = pxToRem(60)
const navWidth = pxToRem(250)

export default function AdminSkeleton({
  categories,
  children,
  title,
}: AdminSkeletonProps): PropsWithChildren<JSX.Element> {
  const [showNav, setShowNav]: [
    boolean | Element,
    React.Dispatch<React.SetStateAction<any>>,
  ] = useState(true)

  const templateArea = showNav ? 'nav' : 'article'
  const headerTemplateColumns = showNav ? navWidth : ''

  return (
    <GridTemplateArea
      gridProps={{
        as: 'main',
        gridTemplateAreas: `
          'header header'
          '${templateArea} article'
        `,
        gridTemplateColumns: `${navWidth} 1fr`,
        gridTemplateRows: `${headerHeight} 1fr`,
      }}
    >
      <Header
        navWidth={navWidth}
        gridProps={{
          display: 'grid',
          gridTemplateColumns: `${headerTemplateColumns} 1fr`,
          gridArea: 'header',
        }}
        setShowNav={setShowNav}
        title={title}
      />

      {showNav && (
        <Nav
          categories={categories}
          gridProps={{
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            boxShadow: '0 2px 10px rgb(0 0 0 / 10%)',
            gridArea: 'nav',
            height: `calc(100vh - ${headerHeight})`,
          }}
        />
      )}

      <Article gridProps={{ gridArea: 'article' }}>
        {children}
      </Article>
    </GridTemplateArea>
  )
}
