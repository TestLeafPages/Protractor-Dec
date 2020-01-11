const loginPage = require('../pages/LoginPage')
const driver = require('protractor')
const login = new loginPage.LoginPage()
describe('TC001', () => { // suite
    beforeAll(() => { // b4 suite
        browser.waitForAngularEnabled(false)
        browser.get("http://leaftaps.com/opentaps/control/main/")
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
    })


    it('Enter user name', () => { // @test
        login.enterUserName('DemoSalesManager')

    })
    it('Enter password', () => {
        login.enterPassword('crmsfa')
            .clickLoginBtn()
            .displayWelcomeMSg();
    })

})