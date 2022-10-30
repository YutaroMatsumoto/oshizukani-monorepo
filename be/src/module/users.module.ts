import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entity/user.entity' // typeormで定義したUserエンティティ
import { UsersService } from 'src/service/users.service'
import { UsersResolver } from 'src/resolver/users.resolver'

@Module({
  // UserエンティティをUsersServiceで使えるようにする
  imports: [TypeOrmModule.forFeature([User])],

  // exportsするために必要。UsersModule内で使うのにも必要。
  providers: [UsersService, UsersResolver],

  // UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService],
})
export class UsersModule {}
