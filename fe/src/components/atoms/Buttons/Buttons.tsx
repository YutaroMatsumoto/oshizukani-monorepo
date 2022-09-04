import tw, { styled, css } from 'twin.macro'
import { useState } from 'react'

type ButtonType = 'green' | 'black'

type Props = {
  className?: string
  type: ButtonType
  title: string
  onClick: () => void
}

type CustomButtonProps = { isHover: boolean }

const BaseButton = tw`flex items-center justify-center h-9 px-5 rounded-lg border-2 font-bold`

const GreenButton = {
  button: ({ isHover }: CustomButtonProps) => [
    tw`bg-white border-green40`,
    isHover && tw`transition bg-green40`,
  ],
  title: ({ isHover }: CustomButtonProps) => [
    tw`text-green40`,
    isHover && tw`transition text-white`,
  ],
}

const BlackButton = {
  button: ({ isHover }: CustomButtonProps) => [
    tw`border-black`,
    isHover && tw`transition bg-black`,
  ],
  title: ({ isHover }: CustomButtonProps) => [
    tw`font-black`,
    isHover && tw`transition text-white`,
  ],
}

// DisableButtonではisHoverを利用しないため、別で管理する必要あり
const Buttons = {
  green: GreenButton,
  black: BlackButton,
}

export const Button = ({ className, type, title, onClick }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <button
      css={[BaseButton, Buttons[type].button({ isHover })]}
      className={className}
      onClick={onClick}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span css={[Buttons[type].title({ isHover })]}>{title}</span>
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
