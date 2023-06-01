## Usage

Set Env `SENTRY_DSN=` to a sentry dsn

Add types for ENV in `env.ts`

```typescript
export default Env.rules({
    SENTRY_DSN: Env.schema.string.optional({ format: 'url' }),
    SENTRY_TRACES_SAMPLE_RATE: Env.schema.string.optional(),
    SENTRY_DEBUG: Env.schema.boolean.optional()
})
```

```ts
import Sentry from "@ioc:Adonis/Addons/Sentry"
Sentry.captureException(new Error('Hello World'))
```

Remember to add the capture in `app/Exceptions/Handler.ts`
```ts
import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import Sentry from '@ioc:Adonis/Addons/Sentry'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error, ctx) {
    Sentry.captureException(error)
    return super.handle(error, ctx)
  }
}
```

Register Tracing Handler in `start/kernel.ts`
```typescript
Server.middleware.register([
    () => import('@keqin/adonis-sentry/TracingHandler')
])
```
