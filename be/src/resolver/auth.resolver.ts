import { UseGuards } from '@nestjs/common'
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql'
import { GqlAuthGuard } from 'src/config/auth/gql-auth.guard'
import { AuthService } from 'src/service/auth.service'
import { LoginResponse, LoginUserInput } from 'src/resolver/dto/login-types'
import { AuthGuard } from '@nestjs/passport'

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context
  ) {
    // Guardsでcontextが渡されている
    return this.authService.login(context.user)
    // return this.authService.login(context.user)
  }
}
