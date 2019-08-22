describe('sample test suite', function () {
it('execute sample test: using async-await', async () => {
        browser.get("https://angular.io");
        var actualTitle = await browser.getTitle();
        await expect(actualTitle).toEqual("Angular");
        console.log("Smoke: Title of the page is " + actualTitle);

    })
});

