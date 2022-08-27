// import先が'passport-jwt'では無い事に注意！
import { Strategy as BaseLocalStrategy } from 'passport-local'

import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService, PasswordOmitUser } from 'src/service/auth.service'
import { User } from 'src/entity/user.entity'
import * as bcrypt from 'bcrypt'

/**
 * @description emailとpasswordを使った認証処理を行うクラス
 * BaseLocalStrategyを拡張したclassが、@UseGuards(AuthGuard('local'))で読み込まれてそう
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(BaseLocalStrategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }

  // passport-localは、デフォルトで email と password をパラメーターで受け取る
  async validate(
    email: User['email'],
    pass: User['password']
  ): Promise<PasswordOmitUser> {
    // 認証して結果を受け取る
    const user = await this.authService.validateUser(email, pass)

    if (!user) {
      throw new UnauthorizedException() // 認証失敗
    }

    return user
  }
}
