describe('SampleRegressionSuite', function () {

    it('execute sample test:using async-await', async function () {
        browser.get("https://angular.io");
        var title=await browser.getTitle();
        await expect(title).toEqual("Angular"); 
        console.log("Regression: Title of the page is " + title);
    
    });
})