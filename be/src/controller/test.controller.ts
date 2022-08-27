import { Controller, Get } from '@nestjs/common'
import { TestService } from 'src/service/test.service'
import { User } from 'src/entity/user.entity'

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello()
  }

  /**
   * @description テストアカウント作成
   */
  @Get('create-test-account')
  createTestAccount() {
    console.log('createTestAccount(TestController)動いている')

    const user = new User()
    user.password = 'Test1234'
    user.email = 'test@example.com'
    user.firstName = 'Taro'
    user.lastName = 'Yamada'
    user.gender = '1'
    user.userStatus = '1'

    this.testService.createTestAccount(user)
  }
}
