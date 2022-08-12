import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestModule } from 'src/module/test.module'
// import { AuthModule } from 'src/module/auth.module'
import { UsersModule } from 'src/module/users.module'
import { CustomNamingStrategy } from 'src/config/db/customNamingStrategy'

// TODO: ormconfigの内容を参照できるようにしたい

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
      isGlobal: true,
    }),

    // ---最低限動く設定--- //
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: '127.0.0.1', // TODO: envで環境を分ける。現在はlocal用の設定になっている。
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: ['dist/entity/*.entity.{js,ts}'], // NOTE: なぜかsrcではなくdistにするとうまくいった
      synchronize: process.env.NODE_ENV === 'development',
      namingStrategy: new CustomNamingStrategy(),
    }),
    // ------------------ //
    TestModule,
    UsersModule,
    // AuthModule,
  ],
})
export class AppModule {}
