import { browser, $, element, by } from 'protractor'
describe('Learn WebTable', () => {
    it('Table', async () => {
        browser.waitForAngularEnabled(false)
        browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT')
        $('#chkSelectDateOnly').click()
        let table = element(by.css('#divTrainsList > table.DataTable.TrainList.TrainListHeader'))
        // FindElements element().all()
        let rows = table.all(by.tagName('tr'))

        let myMap = rows.map(async (ele, i) => {
            let td = ele.$$('td')
            return {
                index: i,
                trainsNumber: await td.get(0).getText(),
                trainsNames: await td.get(1).getText()
            }
        });
        let a = (await myMap).filter((ele, index) => {
            return ele.trainsNumber.startsWith('2')
        })
        a.forEach(ele => {
            console.log(ele);
        })
        // (await myMap).forEach(ele => {
        //     console.log(ele);
        // })

        // // console.log(await rows.count());
        // let rowsCount = await rows.count();
        // // loop through each rows
        // for (let i = 0; i < rowsCount; i++) {
        //     // get the row 1
        //     let cols = rows.get(i);
        //     // get all the cols from the row
        //     let td = cols.all(by.tagName('td'))
        //     // print the first col text
        //     console.log(await td.get(0).getText());
        // }
    })
})