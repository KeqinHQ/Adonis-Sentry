## Usage

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
