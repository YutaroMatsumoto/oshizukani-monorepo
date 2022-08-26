import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entity/user.entity'

/**
 * NOTE:
 *  Seederの設定ができていないので、テストデータ作成もこのserviceで行う
 *  よって、例外的に他domainのimportも許容する
 */
//
@Injectable()
export class TestService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  getHello(): string {
    // console.log('process.env：', process.env)
    // return process.env.NODE_ENV
    return 'Hello Worldaaaa!'
  }

  async createTestAccount(user: User) {
    console.log('createTestAccount(TestService)動いている')
    const testAccount = this.userRepository.create(user)
    console.log('userを表示')
    console.log(user)
    console.log('userを表示')
    console.log('testAccountを表示')
    console.log(testAccount)
    console.log('testAccountを表示')

    return this.userRepository.save(testAccount)
  }
}
