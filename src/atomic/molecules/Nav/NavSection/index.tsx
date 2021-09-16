import React from 'react'

import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'

import { Category } from '..'

type NavSectionProps = {
  items?: Category['items']
  title?: Category['title']
}

export default function NavSection({
  title,
  items,
}: NavSectionProps) {
  return (
    <Box as='section'>
      <Text>{title}</Text>

      <UnorderedList>
        {items?.map((child, index) => (
          <ListItem key={index}>
            <Link href={child.uri}>
              <a target={child?.target}>{child.title}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
