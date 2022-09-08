import 'twin.macro'

type Props = {
  value: string
  className?: string
  onChange: () => void
}

export const TextInput = ({ value, className, onChange }: Props) => {
  return (
    <input
      tw="w-full border-solid border border-gray30 rounded-lg px-2 py-1 focus:outline-none focus:border focus:border-green40"
      className={className}
      value={value}
      onChange={onChange}
    />
  )
}
