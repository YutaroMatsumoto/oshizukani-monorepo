import React from 'react'
import { Header } from 'src/components/organisms/Header'

// TODO: Propsの見直し
type Props = {
  test?: string
}

export const BaseTemplate = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="h-full bg-gray10">
      <Header />
      <div className="pt-16 h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}
