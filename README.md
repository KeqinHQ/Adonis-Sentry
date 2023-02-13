# Adonis-Sentry

## Installation

```bash
npm i @keqin/adonis-sentry
node ace configure @keqin/adonis-sentry
```

1. Set Env `SENTRY_DSN=`
2. call `Sentry.captureException` in `app/Exceptions/Handler.ts`

## Test Sentry DSN 

`node ace sentry:ping`

## Example

```ts
import Sentry from '@ioc:Adonis/Addons/Sentry'

Sentry.captureMessage('Hello World')
```

## License
The MIT License