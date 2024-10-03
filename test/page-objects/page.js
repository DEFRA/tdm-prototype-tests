import { browser, $ } from '@wdio/globals'

class Page {
  get pageHeading() {
    return $('h1')
  }

  open(path) {
    return browser.url(path)
  }


  async getLinkByText(linkText) {
    return $(`a=${linkText}`);  // Find the link by its exact text
  }

  /**
   * Method to verify the link text
   * @param {string} expectedText - The expected text of the link
   */
  async verifyLinkText(expectedText) {
    const link = await this.getLinkByText(expectedText);  // Get the link by text
    await expect(link).toBeDisplayed();  // Verify that the link is displayed
    const actualText = await link.getText();  // Get the actual text of the link
    await expect(actualText).toEqual(expectedText);  // Verify the text matches the expected text
  }

  async clickLinkByText(linkText) {
    const link = await this.getLinkByText(linkText);  // Find the link by text
    await link.click();  // Click the link
  }

  
  get defraLoginLink() {
    return $('a=Defra Login');  // Select the Defra Login link by text
  }

  // Get the list of navigation items
  get navItems() {
    return $$('ul#service-header__nav li a');  // Select all links in the nav list
  }

  // Function to get href attributes of all links
  async getNavLinks() {
    const links = await this.navItems.map(async (navItem) => {
      return await navItem.getAttribute('href');  // Extract the href of each link
    });
    return Promise.all(links);  // Resolve all promises and return the list of hrefs
  }

  // Function to verify specific links by href values
  async verifyNavLinks(expectedLinks) {
    const actualLinks = await this.getNavLinks();
    await expect(actualLinks).toEqual(expectedLinks);  // Compare actual and expected link URLs
  }

}




export { Page }