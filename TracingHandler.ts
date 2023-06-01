import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import * as Sentry from '@sentry/node'

export default class TracingHandler {
  public async handle (
    ctx: HttpContextContract,
    next: () => Promise<void>
  ) {
    ctx.sentry = Sentry
    const transaction = Sentry.startTransaction({
      name: ctx.routeKey,
      op: 'http.server',
    })
    ctx.sentryTrx = transaction
    Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction))
    await next()
    transaction.finish()
  }
}
