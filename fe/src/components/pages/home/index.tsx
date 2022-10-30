import type { NextPage } from 'next'
import { TestRadioButton } from 'src/components/atoms/form/TestRadioButton'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'

export const Home: NextPage = () => {
  return (
    <BaseTemplate>
      <TestRadioButton />
    </BaseTemplate>
  )
}
