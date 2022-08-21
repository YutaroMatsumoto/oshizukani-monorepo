import { setSeederFactory } from 'typeorm-extension'
import { User } from 'src/entity/user.entity'
// import * as bcrypt from 'bcrypt'

export default setSeederFactory(User, (faker) => {
  const user = new User()
  user.id = 1
  user.email = faker.internet.email(user.firstName, user.lastName)
  user.firstName = faker.name.firstName('male')
  user.lastName = faker.name.lastName('male')
  user.password = 'Test1234'
  user.gender = '1'
  user.userStatus = '1'

  return user
})
