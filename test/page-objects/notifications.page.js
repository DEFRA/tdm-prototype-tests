// notifications.page.js
import { Page } from '~/test/page-objects/page.js'

class NotificationsPage extends Page {
  get notificationsLink() {
    return $('aria/Notifications')
  }

  async goToNotifications() {
    await this.notificationsLink.click()
  }

  async clickSpecificNotification() {
    await this.specificNotification.click()
  }

  async clickYesButton() {
    await $('aria/Yes').click()
  }

  async clickTableRow() {
    await $('//*[@id="main-content"]/table[2]/tbody/tr[1]').click()
  }
}

module.exports = new NotificationsPage()
