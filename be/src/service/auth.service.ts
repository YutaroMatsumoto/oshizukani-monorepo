import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { User } from 'src/entity/user.entity'
import { UsersService } from 'src/service/users.service'
import { LoginResponse } from 'src/resolver/dto/login-types'

export type PasswordOmitUser = Omit<
  User,
  'password' | 'hashPassword' | 'validateInsert' | 'validateUpdate'
>

export interface JWTPayload {
  id: User['id']
  email: User['email'] // 仮でemailにする
}

/**
 * @description Passportでは出来ない認証処理をするクラス
 */
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  // ユーザーを認証する
  async validateUser(
    email: User['email'],
    pass: User['password']
  ): Promise<User | null> {
    const user = await this.usersService.findOne(email) // DBからUserを取得

    // DBに保存されているpasswordはハッシュ化されている事を想定しているので、bcryptなどを使ってパスワードを判定する
    if (user && bcrypt.compareSync(pass, user.password)) {
      // 以下がうごなくなるため、userを返却
      // 返却する値からpasswordプロパティを取り除く
      // const { password, ...result } = user
      // return result
      return user
    }

    return null
  }

  // jwt tokenを返す
  // async login(user: PasswordOmitUser): Promise<LoginResponse> {
  async login(user: User): Promise<LoginResponse> {
    // jwtにつけるPayload情報
    const payload: JWTPayload = { id: user.id, email: user.email }

    return {
      access_token: this.jwtService.sign(payload),
      user: user,
    }
  }

  // TODO: メール送信機能を実装して、この機能を完成させる
  async sendSignUpMail(user: PasswordOmitUser) {
    const users = await this.usersService.findOne(user.email)
    users
      ? console.log('アカウントがあるので、次の操作には進ませない')
      : console.log('アカウントがないので、メールを送る')
  }
}
