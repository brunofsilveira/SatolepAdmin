import AdminLib from '@libs/admin'
import React, { PropsWithChildren } from 'react'

type AdminProps = {
  children: JSX.Element
}

export default function Admin({
  children,
}: AdminProps): PropsWithChildren<JSX.Element> {
  return <AdminLib>{children}</AdminLib>
}
