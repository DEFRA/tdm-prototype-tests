import { browser, expect } from '@wdio/globals'
import homePage from '~/test/page-objects/home.page.js'
import loginPage from '~/test/page-objects/login.page.js'
import notificationPage from '~/test/page-objects/notifications.page.js'
import movementsPage from '~/test/page-objects/movements.page.js'

const testUserEmail = 'adnan.arshad@esynergy.co.uk'

describe.only('User is able to login', () => {
  beforeEach(async () => {
    await homePage.open()
  })

  it('Should be on the "Home" page', async () => {
    await expect(browser).toHaveTitle(`Home | Trade Data Matching ALVS V2 POC`)

    await homePage.defraLoginLink.click()
    await expect(browser).toHaveTitle(`Auth | Trade Data Matching ALVS V2 POC`)

    await loginPage.clickLoginLink()
    await expect(browser).toHaveTitle(`DEFRA ID Login | cdp-defra-id-stub`)

    await loginPage.clickLoginLinkByEmail(testUserEmail)
    await expect(browser).toHaveTitle(`Auth | Trade Data Matching ALVS V2 POC`)
    await homePage.verifyLinkText('Sign out Adnan Arshad')

    await notificationPage.notificationsLink.click()
    await expect(browser).toHaveTitle(
      `Notifications | Trade Data Matching ALVS V2 POC`
    )

    await movementsPage.movementsLink.click()
    await expect(browser).toHaveTitle(
      `Movements | Trade Data Matching ALVS V2 POC`
    )
  })

  it('User is able to logout sucessfully', async () => {
    await expect(browser).toHaveTitle(`Home | Trade Data Matching ALVS V2 POC`)
    await homePage.verifyLinkText('Sign out Adnan Arshad')

    await homePage.clickLinkByText('Sign out Adnan Arshad')
    await expect(browser).toHaveTitle(`Home | Trade Data Matching ALVS V2 POC`)
  })
})
