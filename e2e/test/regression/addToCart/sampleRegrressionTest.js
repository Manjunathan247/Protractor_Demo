describe('SampleRegressionSuite', function () {
    it('execute sample test:using then funciton', function () {

        browser.getTitle().then(function (title) {
        console.log("Title of the page is " + title);
        })
    });
})