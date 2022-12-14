import { AuthGuard } from '@nestjs/passport'
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService, PasswordOmitUser } from 'src/service/auth.service'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // passport-local戦略を付与する
  @Post('login')
  async login(@Request() req: { user: PasswordOmitUser }) {
    // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user

    // JwtToken を返す
    return this.authService.login(req.user)
  }

  /**
   * @description JWT認証を用いたサンプルAPI
   */
  @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
  @Get('profile')
  getProfile(@Request() req: { user: PasswordOmitUser }) {
    // JwtStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user

    // 認証に成功したユーザーの情報を返す
    return req.user
  }
}
