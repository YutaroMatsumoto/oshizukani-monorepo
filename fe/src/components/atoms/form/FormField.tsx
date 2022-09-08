import React from 'react'
import tw from 'twin.macro'

type Props = {
  label: string
  isFlex?: boolean // trueなら、inputとlabelを横並びで表示
  className?: string
}

export const FormField = ({
  label,
  isFlex = false,
  className,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div css={[isFlex && tw`flex items-center `]} className={className}>
      <label tw="text-sm w-28 font-semibold">{label}</label>
      <div tw="mt-2">{children}</div>
    </div>
  )
}
