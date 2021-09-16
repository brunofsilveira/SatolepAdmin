import React, { PropsWithChildren, useState } from 'react'

import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  GridProps,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { pxToRem } from '@common/theme/size'

type HeaderProps = {
  children?: JSX.Element
  gridProps?: GridProps
  logo?: string
  logoAlt?: string
  navWidth?: string | number
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
}

export default function Header({
  children,
  gridProps,
  logo = '/assets/logo/satolep.svg',
  logoAlt = 'Satolep Logo',
  navWidth = pxToRem(250),
  setShowNav,
  title = 'Satolep Admin',
}: HeaderProps): PropsWithChildren<JSX.Element> {
  const [showLogo, setShowLogo] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode()

  const titleOverwrite = title.toLocaleUpperCase()
  const imageSize = `${pxToRem(35)}`
  const gapTitle = `${pxToRem(10)}`

  const handleShowLogo = () => {
    setShowNav(!showLogo)
    setShowLogo(!showLogo)
  }

  return (
    <Box as='header' {...gridProps}>
      {showLogo && (
        <Box
          alignItems='center'
          backgroundColor='rgba(0, 0, 0, 0.25)'
          borderBottom='1px solid rgba(255, 255, 255, 0.2)'
          display='flex'
          height='100%'
          gridGap={gapTitle}
          justifyContent='center'
          width={navWidth}
        >
          <Image alt={logoAlt} boxSize={imageSize} src={logo} />
          <Text>{titleOverwrite}</Text>
        </Box>
      )}

      <Box
        alignItems='center'
        backgroundColor='rgba(0, 0, 0, 0.15)'
        boxShadow='0 2px 10px rgb(0 0 0 / 10%)'
        display='flex'
        height='100%'
        justifyContent='space-between'
        padding='0 15px'
        width='100%'
      >
        <HamburgerIcon cursor='pointer' onClick={handleShowLogo} />
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
        {children}
      </Box>
    </Box>
  )
}
