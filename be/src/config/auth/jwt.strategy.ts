// import先が'passport-local'では無い事に注意！
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt'

import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { JWTPayload } from 'src/service/auth.service'
// import { User } from 'src/entity/user.entity'

// JwtについているPayload情報の型
// interface JWTPayload {
//   id: User['id']
//   email: User['email']
// }

/**
 * NOTE:
 *  - PassportStrategyは引数で渡したclassの型のinstanceを返す
 *  - JwtStrategyの親クラス（BaseJwtStrategyの型からできたインスタンス）
 *  - JwtStrategyからインスタンスを作成する時はconfigServiceを渡す必要がある
 *  - JwtStrategyの親クラスのコンストラクターに渡す値がsuperの中のオブジェクトになっている
 */

/**
 * @description JWTの認証処理を行うクラス
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
  constructor(private readonly configService: ConfigService) {
    // TODO: superってなんだっけ？
    // TODO: bearerってなんだっけ？
    super({
      // Authorization bearerからトークンを読み込む関数を返す
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 有効期間を無視するかどうか
      ignoreExpiration: false,
      // envファイルから秘密鍵を渡す
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    })
  }

  // ここでPayloadを使ったバリデーション処理を実行できる
  // Payloadは、AuthService.login()で定義した値
  async validate(payload: JWTPayload): Promise<JWTPayload> {
    return { id: payload.id, email: payload.email }
  }
}
