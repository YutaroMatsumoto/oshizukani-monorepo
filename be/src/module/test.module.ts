import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestController } from 'src/controller/test.controller'
import { TestService } from 'src/service/test.service'
import { User } from 'src/entity/user.entity'
import { UsersService } from 'src/service/users.service'
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [TestController],
  providers: [TestService, UsersService],
})
export class TestModule {}
