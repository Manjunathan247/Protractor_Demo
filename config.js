exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'jasmine',
    //SELENIUM_PROMISE_MANAGER: false,
    /*capabilities:
    {
        browserName: 'chrome'
    },*/

    suites: {
        sampleTestCases: './e2e/test/smoke/sampleTest.js'
    },
    allScriptTimeout: 60000,
    multiCapabilities: [
        {
            browserName: "chrome",
        },
        {
            browserName: "firefox",
        }
    ],

    jasmineNodeOpts: {
        showcolors: true,
        defaulttimeoutInterval: 60000
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        browser.driver.get("https://angular.io");
    }
}