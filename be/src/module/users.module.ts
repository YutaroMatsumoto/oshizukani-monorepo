import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entity/user.entity' // typeormで定義したUserエンティティ
import { UsersService } from 'src/service/users.service' // 上記で定義したServiceクラス

@Module({
  // UserエンティティをUsersServiceで使えるようにする
  imports: [TypeOrmModule.forFeature([User])],

  // exportsするために必要。UsersModule内で使うのにも必要。
  providers: [UsersService],

  // UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService],
})
export class UsersModule {}
