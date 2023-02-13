import { SentryConfig } from '@ioc:Adonis/Addons/Sentry'
import Env from '@ioc:Adonis/Core/Env'

const sentryConfig: SentryConfig = {
  dsn: Env.get('SENTRY_DSN'),
  enabled: true,
}
export default sentryConfig
