import { useMsal } from '@azure/msal-react'

export const LogoutButton = () => {
  const { instance } = useMsal()
  return (
    <div>
      <button onClick={() => instance.logout()}>ログアウト</button>
    </div>
  )
}
