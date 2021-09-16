import React, { PropsWithChildren } from 'react'

import { Category } from '@atomic/molecules/Nav'
import AdminSkeleton from '@atomic/organisms/AdminSkeleton'
import { ChakraProvider } from '@chakra-ui/react'
import satolepTheme from '@common/theme'
import Head from 'next/head'

const satolepCategories: Category[] = [
  {
    items: [
      {
        target: '_blank',
        title: 'GitHub',
        uri: 'https://github.com/brunofsilveira/SatolepAdmin',
      },
      {
        target: '_blank',
        title: 'NPM',
        uri: 'https://npmjs.com/',
      },
    ],
    title: 'Documentação',
  },
]

type SatolepProviderProps = {
  categories?: Category[]
  children: JSX.Element
  head?: { description?: string; title?: string }
  icon?: string
  theme?: typeof satolepTheme
}

export default function SatolepProvider({
  categories = satolepCategories,
  children,
  head = {
    description: 'Help library for creating administrative sites',
    title: 'Satolep Admin',
  },
  icon = '/assets/logo/satolep.svg',
  theme = satolepTheme,
}: SatolepProviderProps): PropsWithChildren<JSX.Element> {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <title>{head.title}</title>
        <meta name='description' content={head.description} />
        <link rel='icon' href={icon} />
      </Head>
      <AdminSkeleton categories={categories} title={head.title}>
        {children}
      </AdminSkeleton>
    </ChakraProvider>
  )
}
