import { NotFoundException } from '@nestjs/common'
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from 'src/entity/user.entity'
import { UsersService } from 'src/service/users.service'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/config/auth/jwt-auth.guard'

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  // async getUser(@Args('userid') id: User['id']) {
  async getUser(@Args({ name: 'userid', type: () => ID }) id: User['id']) {
    const user = await this.usersService.findOneById(id)
    // if (!user) {
    //   throw new NotFoundException(id)
    // }
    return user
  }

  // @Mutation(() => User)
  //  async createUser(
  //      @Args() args: createoneuseraugs
  //  ) {
  //      args.data.password = await bcrypt.hash(args.data.password, 10);
  //      return this.userService.createUser(args);
  //  }
}
