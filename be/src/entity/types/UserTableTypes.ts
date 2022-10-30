import { registerEnumType } from '@nestjs/graphql'
export enum UserStatus {
  INACTIVE = '0', // '0': 非活性
  NOT_COMOLETED = '1', // '1': アカウントはあるが、ユーザー情報登録が完了していない
  REGISTERED = '2', // '2': 活性
}

registerEnumType(UserStatus, { name: 'UserStatus' })

// NOTE: 性別は不要のため、一旦コメントアウト
// export enum Gender {
//   NO_ANSWER = '0', /// 無回答
//   MALE = '1',
//   FEMALE = '2',
//   OTHER = '9', // その他
// }
