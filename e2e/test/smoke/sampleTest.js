describe('sample test suite', function () {

    xit('execute sample test:using then funciton', function () {
        
        browser.getTitle().then(function (title) {
            console.log("Title of the page is " + title);
        })
    });

    it('execute sample test: using async-await',async ()=>
    {
       await browser.get("https://angular.io");
       var actualTitle= await browser.getTitle();
       await expect(actualTitle).toEqual("Angular");
       console.log("Title of the page is "+actualTitle);
        
    })
});

