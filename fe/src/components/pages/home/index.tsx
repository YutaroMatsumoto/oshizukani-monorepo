import type { NextPage } from 'next'
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { BaseTemplate } from 'src/components/templates/BaseTemplate'
import { LoginButton } from 'src/components/atoms/Buttons/LoginButton'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import { LogoutButton } from 'src/components/atoms/Buttons/LogoutButton'

export const Home: NextPage = () => {
  const user = useCurrentUser()
  console.log('user：', user)
  return (
    <BaseTemplate>
      <div className="flex justify-center items-center">aaaa</div>

      <UnauthenticatedTemplate>
        <LoginButton />
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <LogoutButton />
      </AuthenticatedTemplate>
    </BaseTemplate>
  )
}
