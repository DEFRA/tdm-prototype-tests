import { browser, expect } from '@wdio/globals'
import { before } from 'mocha'
import homePage from '~/test/page-objects/home.page.js'
import loginPage from '~/test/page-objects/login.page.js'
import notificationPage from '~/test/page-objects/notifications.page.js'

describe('User is able to view Notifications', () => {
  const expectedChedTypes = ['CHEDA', 'CHEDD', 'CHEDP', 'CHEDPP']
  const testUserEmail = 'adnan.arshad@esynergy.co.uk'
  before(async () => {
    await homePage.open()
    await homePage.defraLoginLink.click()
    await loginPage.clickLoginLink()
    await loginPage.clickLoginLinkByEmail(testUserEmail)
    await expect(browser).toHaveTitle(`Auth | Trade Data Matching ALVS V2 POC`)
  })

  it('verify user is able to view notification', async () => {
    await notificationPage.notificationsLink.click()
    await expect(browser).toHaveTitle(
      `Notifications | Trade Data Matching ALVS V2 POC`
    )

    // Get Ched types from the notifications page
    const chedTypes = await notificationPage.getAllChedTypes()

    // Compare actual Ched types with expected values
    expect(chedTypes).toEqual(expectedChedTypes)
  })
})
