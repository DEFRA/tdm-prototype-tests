// login.page.js
import { Page } from '~/test/page-objects/page.js'

class LoginPage extends Page {

    get loginLink() {
        return $('#login-link');
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async clickLoginLinkByEmail(email) {
        const rowSelector = `//tr[th[contains(text(), '${email}')]]`;
        const row = await $(rowSelector);
        const loginLink = await row.$('.govuk-table__cell a[href*="authorize"]');
        await loginLink.click();
    }
}

module.exports = new LoginPage();
