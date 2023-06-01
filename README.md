# Adonis-Sentry

## Installation

```bash
npm i @keqin/adonis-sentry
node ace configure @keqin/adonis-sentry
```

1. Set Env `SENTRY_DSN=`
2. call `Sentry.captureException` in `app/Exceptions/Handler.ts`
3. Add types for ENV in `env.ts`

```typescript
SENTRY_DSN: Env.schema.string.optional({ format: 'url' }),
SENTRY_TRACES_SAMPLE_RATE: Env.schema.string.optional(),
SENTRY_DEBUG: Env.schema.boolean.optional(),
```

## Test Sentry DSN 

`node ace sentry:ping`

## Performance monitoring
- set a env variable `SENTRY_TRACES_SAMPLE_RATE` between `0` to `1` as `tracesSampleRate`. we suggest set it to `1` in dev/testing environment.
- regisitry middleware in `kernel.ts`
    ```typescript
    Server.middleware.register([
        () => import('@keqin/adonis-sentry/TracingHandler')
    ])
    ```
    it would startTransaction in a http request, and inject `sentry`/`sentryTrx` to ctx

- Optional: create span in a request
- 
```typescript
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Controller {
    public async index({ sentry, sentryTrx }: HttpContextContract) {
        const span = sentryTrx.startChild({
            op: 'query',
            description: "more specific details"
        })
        // to do something
        span.finish()
    }
}
```

## Example

```ts
import Sentry from '@ioc:Adonis/Addons/Sentry'

Sentry.captureMessage('Hello World')
```

## Debug mode
set `SENTRY_DEBUG` as `true` to turn debug mode on 

## License
The MIT License