import 'twin.macro'
import { useState } from 'react'
import { BaseButtonStyle, ButtonProps, ButtonStyle } from './baseStyles'

export const Button = ({ className, type, title, onClick }: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <button
      css={[BaseButtonStyle, ButtonStyle[type].button({ isHover })]}
      className={className}
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span css={[ButtonStyle[type].title({ isHover })]}>{title}</span>
    </button>
  )
}

// DisableButtonはisHoverを利用しないので、他のボタンとは別に管理
export const DisableButton = (title: string) => {
  return (
    <button tw="border-gray30 cursor-default" disabled={true}>
      <span tw="text-gray30">{title}</span>
    </button>
  )
}
