import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class SentryPing extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'sentry:ping'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: true,
  }

  public async run () {
    const sentry = this.application.container.make('Adonis/Addons/Sentry')
    const eventId = sentry.captureMessage('Ping from node ace ' + SentryPing.commandName)
    const isSuccess = await sentry.flush()
    this.logger.info(isSuccess ? 'Ping success!' : 'Ping failed.')
    this.logger.info(`Sentry EventId: ${eventId}`)
  }
}
