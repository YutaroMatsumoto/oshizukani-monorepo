import tw from 'twin.macro'

export type ButtonType = 'green' | 'black'

export type ButtonProps = {
  className?: string
  type: ButtonType
  title: string
  onClick: () => void
}

export type CustomButtonProps = { isHover: boolean }

export const BaseButtonStyle = tw`flex items-center justify-center h-9 px-5 rounded-lg border-2 font-bold`

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

export const ButtonStyle = {
  green: GreenButton,
  black: BlackButton,
}
