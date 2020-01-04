const driver = require('protractor')
describe('ExpectedConditions', () => {

    it('Waits', async () => {

        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://leafground.com/pages/alertappear.html')
        driver.$('#alert').click()



    })
})