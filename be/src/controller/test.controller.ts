import { Controller, Get } from '@nestjs/common'
import { TestService } from 'src/service/test.service'

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello()
  }
}
