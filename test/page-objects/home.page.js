import { browser, $ } from '@wdio/globals'
import { Page } from '~/test/page-objects/page.js'

class HomePage extends Page{

  get pageHeading() {
    return $('h1')
  }

  open() {
    return browser.url('')
  }
}

export default new HomePage()