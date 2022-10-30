import { ConflictException, Controller, Get } from '@nestjs/common'
import { TestService } from 'src/service/test.service'
import { User } from 'src/entity/user.entity'
import { UsersService } from 'src/service/users.service'
import { UserStatus } from '../entity/types/UserTableTypes'

@Controller()
export class TestController {
  constructor(
    private readonly testService: TestService,
    private usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.testService.getHello()
  }

  /**
   * @description テストアカウント作成
   */
  @Get('create-test-account')
  async createTestAccount() {
    console.log('createTestAccount(TestController)動いている')
    const user = new User()
    user.password = 'Test1234'
    user.email = 'test@example.com'
    user.firstName = 'Taro'
    user.lastName = 'Yamada'
    user.userStatus = UserStatus.REGISTERED

    const isExistEmail = await this.usersService.findOne(user.email)
    if (isExistEmail) {
      throw new ConflictException()
    }

    this.testService.createTestAccount(user)
  }
}
