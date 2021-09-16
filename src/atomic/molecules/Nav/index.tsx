import React, { PropsWithChildren } from 'react'

import { Box, GridProps, LinkProps } from '@chakra-ui/react'

import NavSection from './NavSection'

type CategoryItem = {
  target?: LinkProps['target']
  title: string
  uri: string
}

export type Category = {
  items: CategoryItem[]
  title: string
}

type NavProps = {
  categories?: Category[]
  items?: JSX.Element
  gridProps?: GridProps
}

export default function Nav({
  categories,
  gridProps,
}: NavProps): PropsWithChildren<JSX.Element> {
  return (
    <Box as='nav' overflowY='auto' {...gridProps}>
      {categories?.map((category, index) => (
        <NavSection
          key={index}
          items={category.items}
          title={category.title}
        />
      ))}
    </Box>
  )
}
