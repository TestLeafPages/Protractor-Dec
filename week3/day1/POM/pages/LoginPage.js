// import { browser, $, element, by } from "protractor"
const home = require('./HomePage')
class LoginPage {

    enterUserName(user) {
        element(by.id('username'))
            .sendKeys(user)
        return this
    }
    enterPassword(pass) {
        element(by.id('password'))
            .sendKeys(pass)
        return this
    }
    clickLoginBtn() {
        $('.decorativeSubmit').click()
        return new home.HomePage();
    }

}
exports.LoginPage = LoginPage;