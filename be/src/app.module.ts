import { Module } from '@nestjs/common'
import { TestModule } from 'src/module/test.module'
import { AuthModule } from 'src/module/auth.module'
import { UsersModule } from 'src/module/users.module'

@Module({
  imports: [TestModule, UsersModule, AuthModule],
})
export class AppModule {}
