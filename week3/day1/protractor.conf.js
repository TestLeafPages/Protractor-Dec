require("babel-register")({
    presets: ["es2015"]
});
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
const HtmlReporter = require("protractor-beautiful-reporter");
const date = new Date()
exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['anySpecFile.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999
    },
    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    onPrepare: () => {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(
            new HtmlReporter({
                takeScreenShotsOnlyForFailedSpecs: true,
                baseDirectory: "Reports/" + date.getTime().toString()
                , docTitle: 'Protractor test automation report'
            }).getJasmine2Reporter()
        );
        jasmine.getEnv().addReporter(
            new SpecReporter({
                displayFailuresSummary: true,
                displayFailuredSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
            })
        );
    }

}