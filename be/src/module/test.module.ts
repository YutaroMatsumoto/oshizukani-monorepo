import { Module } from '@nestjs/common'
import { TestController } from 'src/controller/test.controller'
import { TestService } from 'src/service/test.service'

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
