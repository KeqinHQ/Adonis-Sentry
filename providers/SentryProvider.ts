import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Config from '@ioc:Adonis/Core/Config'

import * as Sentry from '@sentry/node'

export default class SentryProvider {
  public static needsApplication = true
  constructor (protected app: ApplicationContract) {}

  public register () {
    this.app.container.singleton('Adonis/Addons/Sentry', () => {
      return { ...Sentry }
    })
  }
  public async boot () {
    const config: typeof Config = this.app.container.use('Adonis/Core/Config')
    Sentry.init(config.get('sentry'))
  }
}
