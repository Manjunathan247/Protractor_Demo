exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'jasmine',
    //SELENIUM_PROMISE_MANAGER: false,
    /*capabilities:
    {
        browserName: 'chrome'
    },*/

    allScriptTimeout: 60000, //The timeout in milliseconds for each script run on the browser
    multiCapabilities: [
        {
            browserName: "chrome",
        },
        /*{
            browserName: "firefox",
        }*/
    ],

    jasmineNodeOpts: {
        showcolors: true,
        defaulttimeoutInterval: 60000 //countdown starts whenever a promise starts
    },

    onPrepare: function () {
        browser.manage().window().maximize();
        
        browser.waitForAngularEnabled(false);
    },
    
    suites: {
        //smoke: './e2e/test/smoke/sampleSmokeTest.js',
        regression: './e2e/test/regression/addToCart/sampleRegressionTest.js'

    },
}