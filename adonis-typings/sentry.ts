declare module '@ioc:Adonis/Addons/Sentry' {
  import type { NodeOptions } from '@sentry/node'
  export interface SentryConfig extends NodeOptions { }
  import * as Sentry from '@sentry/node'
  export default Sentry
}
declare module '@ioc:Adonis/Core/HttpContext' {
  import * as Sentry from '@sentry/node'
  interface HttpContextContract {
    sentry?: typeof Sentry
    sentryTrx?: Sentry.Transaction
  }
}
