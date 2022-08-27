import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/module/users.module'
import { AuthController } from 'src/controller/auth.controller'
import { AuthService } from 'src/service/auth.service'

// Strategyクラス
import { JwtStrategy } from 'src/config/auth/jwt.strategy'
import { LocalStrategy } from 'src/config/auth/local.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET_KEY'),
          signOptions: {
            // 有効期間を設定
            expiresIn: '1200s',
          },
        }
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
