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
    <Box
      as='section'
      _hover={{
        ul: {
          maxHeight: '500px',
          transition: 'all 0.25s ease-in',
          opacity: '1',
          pointerEvents: 'all',
        },
      }}
    >
      <Text
        borderBottom='1px solid rgba(255, 255, 255, 0.05)'
        cursor='default'
        padding='13px 15px'
        _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
      >
        {title}
      </Text>

      <UnorderedList
        backgroundColor='rgba(0, 0, 0, 0.1)'
        maxHeight='0'
        marginInlineStart='auto'
        opacity='0'
        pointerEvents='none'
        transition='all 0.25s ease-out'
      >
        {items?.map((child, index) => (
          <ListItem
            alignItems='center'
            display='flex'
            justifyContent='flex-start'
            key={index}
            _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <Link href={child.uri}>
              <a
                style={{
                  padding: '7.5px 15px 7.5px 25px',
                  width: '100%',
                }}
                target={child?.target}
              >
                {child.title}
              </a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
