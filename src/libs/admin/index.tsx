import React, { PropsWithChildren } from 'react'
import AdminSkeleton from './app/atomic/molecules/AdminSkeleton'

type AdminProps = {
  children: JSX.Element
}

export default function Admin({
  children,
}: AdminProps): PropsWithChildren<JSX.Element> {
  return <AdminSkeleton>{children}</AdminSkeleton>
}
