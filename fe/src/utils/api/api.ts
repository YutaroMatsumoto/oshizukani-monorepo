import axios from 'axios'

type IsMtg = {
  isMtg: boolean
}

type Credential = {
  email: string
  password: string
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
})

// export const fetcher = (url: string) =>
//   instance.get(url).then((res) => res.data)

// export const getIsNowMtg = () => {
//   return instance.get<IsMtg>('/isMtg')
// }

export const postSigninUser = (data: Credential) => {
  // TODO:
  return instance.post<Credential>('/login', data)
}

export default instance
