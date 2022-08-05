import { Module } from '@nestjs/common'
import { TestModule } from './module/test.module'
import { AuthModule } from './module/auth.module'

@Module({
  imports: [TestModule, AuthModule],
})
export class AppModule {}
