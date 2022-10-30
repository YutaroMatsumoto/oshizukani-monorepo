import { Field, ObjectType, InputType } from '@nestjs/graphql'
import { User } from 'src/entity/user.entity'
import { PasswordOmitUser } from 'src/service/auth.service'

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string

  @Field(() => User)
  user: User

  // @Field(() => User)
  // user: PasswordOmitUser
}

@InputType()
export class LoginUserInput {
  @Field()
  email: string

  @Field()
  password: string
}
