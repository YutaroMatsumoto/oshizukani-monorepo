import React from 'react'
import 'twin.macro'
import { Header } from 'src/components/organisms/Header'

// TODO: Propsの見直し
type Props = {
  test?: string
}

export const BaseTemplate = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div tw="h-full bg-gray10">
      <Header />
      <div tw="pt-16 h-full flex justify-center items-center">{children}</div>
    </div>
  )
}
