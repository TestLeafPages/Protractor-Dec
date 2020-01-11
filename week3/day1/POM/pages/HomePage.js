// import { browser, $, element, by } from "protractor"
// eng = {}
class HomePage {
    verifyTitle(title) {
        expect(browser.getTitle()).toBe(title)
        return this;
    }
    async displayWelcomeMSg() {

        console.log(await element(by.tagName('h2')).getText())
        return this;
    }

}
exports.HomePage = HomePage;