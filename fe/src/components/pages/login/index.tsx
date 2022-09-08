import { css } from 'twin.macro'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'
import { LoginFrom } from './LoginForm'

export const Login = () => {
  return (
    <BaseTemplate>
      <div tw="h-full sm:w-3/4 lg:w-1/2 mx-auto mt-20" css={[]}>
        <h2 tw="text-2xl font-bold mb-8">ログイン</h2>
        <div tw="bg-green10 w-full rounded-md">
          <LoginFrom />
        </div>
      </div>
    </BaseTemplate>
  )
}
