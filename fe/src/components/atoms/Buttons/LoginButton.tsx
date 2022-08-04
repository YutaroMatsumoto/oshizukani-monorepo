import { useMsal } from '@azure/msal-react'
import { loginRequest } from 'src/config/authConfig'

// TODO: デザイン直す
export const LoginButton = () => {
  const { instance } = useMsal()
  return (
    <div>
      <button onClick={() => instance.loginRedirect(loginRequest)}>
        ログイン
      </button>
    </div>
  )
}
