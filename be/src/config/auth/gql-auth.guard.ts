import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

// export class GqlAuthGuard extends AuthGuard('jwt') {
/**
 * AuthGuardクラスはREST用なのでGraphQLでも使えるようにオーバーライドしている
 * 参考: https://zenn.dev/mseto/articles/nest-graphql-prisma#gqlauthguard%E3%81%AE%E4%BD%9C%E6%88%90
 */
@Injectable()
export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super()
  }

  getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context)
    // return ctx.getContext().req
    const request = ctx.getContext()
    request.body = ctx.getArgs().loginUserInput
    return request
  }
}
