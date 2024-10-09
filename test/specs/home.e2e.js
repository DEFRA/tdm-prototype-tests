import { browser, expect } from '@wdio/globals'
import { before } from 'mocha'
import homePage from '~/test/page-objects/home.page.js'

describe('User is able to login and view Notifications', () => {
  before(async () => {
    await homePage.open()
  })

  it('Should be on the "Home" page', async () => {
    await expect(browser).toHaveTitle(`Home | Trade Data Matching ALVS V2 POC`)

    await homePage.defraLoginLink.click()
    await expect(browser).toHaveTitle(`Auth | Trade Data Matching ALVS V2 POC`)
  })

  it('Should verify that all navigation links are correct', async () => {
    const expectedLinks = ['/', '/notifications', '/movements', '/admin']
    await homePage.verifyNavLinks(expectedLinks)
  })
})
